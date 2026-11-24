const GEOCODE_TTL_MS = 24 * 60 * 60 * 1000; // 24h (strictement sous la limite de 30 jours)
const geocodeCache = new Map();

export function getMapsApiKey() {
  return (
    process.env.GOOGLE_MAPS_API_KEY ||
    process.env.VITE_GOOGLE_MAPS_API_KEY ||
    process.env.MAPS_API_KEY ||
    process.env.GMP_API_KEY ||
    ''
  );
}

export function getMapsConfigPayload() {
  const apiKey = getMapsApiKey();
  return {
    configured: Boolean(apiKey),
    apiKey
  };
}

export async function geocodeAddress(rawAddress) {
  const address = String(rawAddress || '').trim();
  if (!address || address.length > 260) {
    return { status: 400, body: { error: 'Adresse requise.' } };
  }

  const cached = geocodeCache.get(address);
  if (cached && Date.now() - cached.ts < GEOCODE_TTL_MS) {
    return { status: 200, body: cached.data };
  }

  const apiKey = getMapsApiKey();
  if (!apiKey) {
    return {
      status: 503,
      body: { error: 'Clé Google Maps non configurée sur le serveur.' }
    };
  }

  try {
    const url = new URL('https://maps.googleapis.com/maps/api/geocode/json');
    url.searchParams.set('address', address);
    url.searchParams.set('region', 'bj');
    url.searchParams.set('language', 'fr');
    url.searchParams.set('key', apiKey);

    const upstream = await fetch(url.toString());
    if (upstream.status === 429) {
      return {
        status: 429,
        body: { status: 'RESOURCE_EXHAUSTED', error: 'Quota Google Maps atteint.' }
      };
    }

    const payload = await upstream.json();
    if (payload.status === 'OVER_QUERY_LIMIT') {
      return {
        status: 429,
        body: { status: 'RESOURCE_EXHAUSTED', error: 'Quota Google Maps atteint.' }
      };
    }

    if (payload.status !== 'OK' || !Array.isArray(payload.results) || !payload.results.length) {
      return {
        status: 404,
        body: { status: payload.status || 'ZERO_RESULTS', error: 'Localisation introuvable.' }
      };
    }

    const best = payload.results[0];
    const data = {
      lat: best.geometry.location.lat,
      lng: best.geometry.location.lng,
      formattedAddress: best.formatted_address,
      placeId: best.place_id || '',
      locationType: best.geometry.location_type || ''
    };

    geocodeCache.set(address, { ts: Date.now(), data });
    return { status: 200, body: data };
  } catch (err) {
    console.error('Geocode proxy error:', err);
    return {
      status: 502,
      body: { error: 'Erreur lors du géocodage Google Maps.' }
    };
  }
}
