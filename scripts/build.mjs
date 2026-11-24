import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const JS_FILES = [
  'server.js',
  'script.js',
  'src/three-ministry-scene.js',
  'src/maps-ministry.js',
  'lib/maps-proxy.js',
  'api/maps-config.js',
  'api/geocode.js'
];

for (const rel of JS_FILES) {
  execFileSync(process.execPath, ['--check', path.join(ROOT, rel)], { stdio: 'inherit' });
}

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

function copyIfExists(srcRel, destRel = srcRel) {
  const src = path.join(ROOT, srcRel);
  if (!fs.existsSync(src)) return;
  const dest = path.join(DIST, destRel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}

// Root web entry and scripts
copyIfExists('index.html');
copyIfExists('styles.css');
copyIfExists('script.js');

// Static assets & frontend modules
copyIfExists('images');
copyIfExists('src');
copyIfExists('public');

// Three.js browser ES modules (mapped via importmap to /vendor/three/...)
copyIfExists('node_modules/three/build/three.module.js', 'vendor/three/build/three.module.js');
copyIfExists('node_modules/three/build/three.core.js', 'vendor/three/build/three.core.js');
copyIfExists(
  'node_modules/three/examples/jsm/controls/OrbitControls.js',
  'vendor/three/examples/jsm/controls/OrbitControls.js'
);
copyIfExists(
  'node_modules/three/examples/jsm/environments/RoomEnvironment.js',
  'vendor/three/examples/jsm/environments/RoomEnvironment.js'
);

console.log('Build complete: static bundle generated in dist/');
