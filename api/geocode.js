import { geocodeAddress } from '../lib/maps-proxy.js';

export default async function handler(req, res) {
  const result = await geocodeAddress(req.query?.address);
  res.status(result.status).json(result.body);
}
