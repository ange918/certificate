import { getMapsConfigPayload } from '../lib/maps-proxy.js';

export default function handler(_req, res) {
  res.status(200).json(getMapsConfigPayload());
}
