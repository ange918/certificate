import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getMapsConfigPayload, geocodeAddress } from './lib/maps-proxy.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use('/vendor/three', express.static(path.join(__dirname, 'node_modules/three')));
app.use(express.static(__dirname));

app.get('/api/maps-config', (_req, res) => {
  res.json(getMapsConfigPayload());
});

app.get('/api/geocode', async (req, res) => {
  const result = await geocodeAddress(req.query.address);
  return res.status(result.status).json(result.body);
});

app.use((req, res) => {
  if (path.extname(req.path)) {
    return res.status(404).send('Not found');
  }
  return res.sendFile(path.join(__dirname, 'index.html'));
});

if (!process.env.VERCEL) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

export default app;
