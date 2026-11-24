// Google Maps Platform — Localisation interactive des ministères du Bénin

let mapsConfigPromise = null;
let mapsBootstrapPromise = null;
let activeMapInstance = null;
let activeMarker = null;
let activeInfoWindow = null;

// Two-Tier Quota Defense (Section 8 — Demo Key)
window.gm_authFailure = () => {
  window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
};

const origConsoleError = console.error;
console.error = (...args) => {
  origConsoleError.apply(console, args);
  const msg = args.map((a) => String(a)).join(' ');
  if (msg.includes('OverQuotaMapError') || msg.includes('QuotaExceededError')) {
    window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
  }
};

function notifyQuotaIfNeeded(err) {
  const txt = String(err?.message || err || '');
  if (
    txt.includes('OVER_QUERY_LIMIT') ||
    txt.includes('RESOURCE_EXHAUSTED') ||
    txt.includes('Quota') ||
    txt.includes('429')
  ) {
    window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
  }
}

async function getMapsConfig() {
  if (!mapsConfigPromise) {
    mapsConfigPromise = fetch('/api/maps-config')
      .then((res) => (res.ok ? res.json() : { configured: false, apiKey: '' }))
      .catch(() => ({ configured: false, apiKey: '' }));
  }
  return mapsConfigPromise;
}

function loadGoogleMapsBootstrap(apiKey) {
  if (mapsBootstrapPromise) return mapsBootstrapPromise;
  mapsBootstrapPromise = new Promise((resolve, reject) => {
    if (window.google?.maps?.importLibrary) {
      resolve();
      return;
    }
    try {
      ((g) => {
        var h, a, k, p = 'The Google Maps JavaScript API', c = 'google', l = 'importLibrary', q = '__ib__', m = document, b = window;
        b = b[c] || (b[c] = {});
        var d = b.maps || (b.maps = {}), r = new Set(), e = new URLSearchParams(),
          u = () => h || (h = new Promise(async (f, n) => {
            await (a = m.createElement('script'));
            e.set('libraries', [...r] + '');
            for (k in g) e.set(k.replace(/[A-Z]/g, (t) => '_' + t[0].toLowerCase()), g[k]);
            e.set('callback', c + '.maps.' + q);
            a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
            d[q] = f;
            a.onerror = () => h = n(Error(p + ' could not load.'));
            a.nonce = m.querySelector('script[nonce]')?.nonce || '';
            m.head.append(a);
          }));
        d[l] ? console.warn(p + ' only loads once. Ignoring:', g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n));
      })({
        key: apiKey,
        v: 'weekly',
        language: 'fr',
        region: 'BJ'
      });
      resolve();
    } catch (err) {
      reject(err);
    }
  });
  return mapsBootstrapPromise;
}

async function resolveMinistryCoordinates(ministry) {
  const queries = [
    `${ministry.name}, ${ministry.location.city}, Bénin`,
    `${ministry.location.address}, ${ministry.location.city}, Bénin`,
    `${ministry.location.district}, ${ministry.location.city}, Bénin`
  ];

  // 1) Serveur proxy Geocoding API (évite le piège CORS CF1)
  for (const q of queries) {
    try {
      const res = await fetch(`/api/geocode?address=${encodeURIComponent(q)}`);
      if (res.status === 429) {
        window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
        return null;
      }
      if (res.ok) {
        const data = await res.json();
        if (typeof data.lat === 'number' && typeof data.lng === 'number') {
          return data;
        }
      }
    } catch {
      // Poursuit vers la tentative suivante ou Places API
    }
  }

  // 2) Repli via Places API (New) Place.searchByText
  try {
    const { Place } = await google.maps.importLibrary('places');
    for (const q of queries) {
      const { places } = await Place.searchByText({
        textQuery: q,
        fields: ['displayName', 'location', 'formattedAddress', 'id'],
        language: 'fr',
        region: 'bj',
        maxResultCount: 1,
        internalUsageAttributionIds: ['gmp_mcp_codeassist_v1_aistudio']
      });
      if (places && places.length && places[0].location) {
        const loc = places[0].location;
        return {
          lat: typeof loc.lat === 'function' ? loc.lat() : loc.lat,
          lng: typeof loc.lng === 'function' ? loc.lng() : loc.lng,
          formattedAddress: places[0].formattedAddress || `${ministry.location.address}, ${ministry.location.city}, Bénin`,
          placeId: places[0].id || ''
        };
      }
    }
  } catch (err) {
    notifyQuotaIfNeeded(err);
  }

  return null;
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function mountMinistryMap(container, ministry, elements = {}) {
  if (!container || !ministry) return;

  if (activeInfoWindow) {
    activeInfoWindow.close();
    activeInfoWindow = null;
  }
  if (activeMarker) {
    activeMarker.map = null;
    activeMarker = null;
  }
  activeMapInstance = null;

  const { coordsEl, directionsBtn, statusEl, mapTypeBtn } = elements;
  if (statusEl) statusEl.textContent = 'Localisation Google Maps en cours...';

  const cfg = await getMapsConfig();
  if (!cfg.configured || !cfg.apiKey) {
    if (statusEl) {
      statusEl.textContent = 'Clé Google Maps indisponible. Utilisez le lien d’itinéraire ci-dessous.';
    }
    container.innerHTML = `
      <div class="map-fallback-box">
        <p><strong>${escapeHtml(ministry.name)}</strong></p>
        <p>${escapeHtml(ministry.location.address)} · ${escapeHtml(ministry.location.city)}</p>
      </div>
    `;
    return;
  }

  try {
    await loadGoogleMapsBootstrap(cfg.apiKey);

    const [{ Map, InfoWindow }, { AdvancedMarkerElement, PinElement }] = await Promise.all([
      google.maps.importLibrary('maps'),
      google.maps.importLibrary('marker')
    ]);

    const geo = await resolveMinistryCoordinates(ministry);
    if (!geo) {
      if (statusEl) {
        statusEl.textContent = 'Impossible de géolocaliser automatiquement ce siège pour le moment.';
      }
      return;
    }

    const position = { lat: geo.lat, lng: geo.lng };

    if (coordsEl) {
      coordsEl.textContent = `${geo.lat.toFixed(5)}, ${geo.lng.toFixed(5)}`;
    }
    if (directionsBtn) {
      const mapsUrl = new URL('https://www.google.com/maps/search/');
      mapsUrl.searchParams.set('api', '1');
      mapsUrl.searchParams.set('query', `${geo.lat},${geo.lng}`);
      if (geo.placeId) mapsUrl.searchParams.set('query_place_id', geo.placeId);
      directionsBtn.href = mapsUrl.toString();
      directionsBtn.hidden = false;
    }

    container.innerHTML = '';

    activeMapInstance = new Map(container, {
      center: position,
      zoom: 15,
      mapId: 'DEMO_MAP_ID',
      gestureHandling: 'cooperative',
      mapTypeControl: false,
      streetViewControl: true,
      fullscreenControl: true,
      internalUsageAttributionIds: ['gmp_mcp_codeassist_v1_aistudio']
    });

    const pin = new PinElement({
      background: '#d2521b',
      borderColor: '#0a0905',
      glyphColor: '#ffffff',
      scale: 1.1
    });

    activeMarker = new AdvancedMarkerElement({
      map: activeMapInstance,
      position,
      title: ministry.name,
      gmpClickable: true
    });
    activeMarker.append(pin);

    activeInfoWindow = new InfoWindow();
    const openBubble = () => {
      activeInfoWindow.setHeaderContent(ministry.name);
      activeInfoWindow.setContent(`
        <div style="font-family:'Inter Tight',sans-serif;font-size:12.5px;line-height:1.5;max-width:250px;color:#0a0905">
          <div style="font-weight:700;color:#d2521b;margin-bottom:4px">${escapeHtml(ministry.minister)}</div>
          <div>${escapeHtml(geo.formattedAddress || `${ministry.location.address}, ${ministry.location.city}`)}</div>
        </div>
      `);
      activeInfoWindow.open({
        map: activeMapInstance,
        anchor: activeMarker,
        shouldFocus: false
      });
    };

    activeMarker.addListener('click', openBubble);
    openBubble();

    if (mapTypeBtn) {
      let isSatellite = false;
      mapTypeBtn.textContent = 'Vue satellite';
      mapTypeBtn.onclick = () => {
        if (!activeMapInstance) return;
        isSatellite = !isSatellite;
        activeMapInstance.setMapTypeId(isSatellite ? 'hybrid' : 'roadmap');
        mapTypeBtn.textContent = isSatellite ? 'Vue plan' : 'Vue satellite';
      };
    }

    if (statusEl) {
      statusEl.textContent = geo.formattedAddress || `${ministry.location.city} · Bénin`;
    }
  } catch (err) {
    console.error('Google Maps init error:', err);
    notifyQuotaIfNeeded(err);
    if (statusEl) {
      statusEl.textContent = 'Erreur de chargement de la carte Google Maps.';
    }
  }
}

window.MinistryMapController = {
  mount: mountMinistryMap
};
