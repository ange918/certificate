import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

const GEOCODE_TTL_MS = 24 * 60 * 60 * 1000; // 24h (strictement sous la limite de 30 jours)
const geocodeCache = new Map();

function getMapsApiKey() {
  return (
    process.env.GOOGLE_MAPS_API_KEY ||
    process.env.VITE_GOOGLE_MAPS_API_KEY ||
    process.env.MAPS_API_KEY ||
    process.env.GMP_API_KEY ||
    ''
  );
}

app.use('/vendor/three', express.static(path.join(__dirname, 'node_modules/three')));
app.use(express.static(__dirname));

app.get('/api/maps-config', (_req, res) => {
  const apiKey = getMapsApiKey();
  res.json({
    configured: Boolean(apiKey),
    apiKey
  });
});

app.get('/api/geocode', async (req, res) => {
  const address = String(req.query.address || '').trim();
  if (!address || address.length > 260) {
    return res.status(400).json({ error: 'Adresse requise.' });
  }

  const cached = geocodeCache.get(address);
  if (cached && Date.now() - cached.ts < GEOCODE_TTL_MS) {
    return res.json(cached.data);
  }

  const apiKey = getMapsApiKey();
  if (!apiKey) {
    return res.status(503).json({ error: 'Clé Google Maps non configurée sur le serveur.' });
  }

  try {
    const url = new URL('https://maps.googleapis.com/maps/api/geocode/json');
    url.searchParams.set('address', address);
    url.searchParams.set('region', 'bj');
    url.searchParams.set('language', 'fr');
    url.searchParams.set('key', apiKey);

    const upstream = await fetch(url.toString());
    if (upstream.status === 429) {
      return res.status(429).json({ status: 'RESOURCE_EXHAUSTED', error: 'Quota Google Maps atteint.' });
    }

    const payload = await upstream.json();
    if (payload.status === 'OVER_QUERY_LIMIT') {
      return res.status(429).json({ status: 'RESOURCE_EXHAUSTED', error: 'Quota Google Maps atteint.' });
    }

    if (payload.status !== 'OK' || !Array.isArray(payload.results) || !payload.results.length) {
      return res.status(404).json({ status: payload.status || 'ZERO_RESULTS', error: 'Localisation introuvable.' });
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
    return res.json(data);
  } catch (err) {
    console.error('Geocode proxy error:', err);
    return res.status(502).json({ error: 'Erreur lors du géocodage Google Maps.' });
  }
});

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
