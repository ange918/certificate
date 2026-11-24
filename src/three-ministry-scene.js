import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// Détection fiable du rendu logiciel (SwiftShader / llvmpipe / WARP)
const isSoftwareGl = (() => {
  try {
    const probe = document.createElement('canvas');
    const gl = probe.getContext('webgl2');
    if (!gl) return true;
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
    const gpu = String(gl.getParameter(param) || '');
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
  } catch {
    return true;
  }
})();

// Objets mathématiques pré-alloués hors de la boucle de rendu (zéro GC)
const _camGoalPos = new THREE.Vector3();
const _camGoalTarget = new THREE.Vector3();
const _dummy = new THREE.Object3D();
const _color = new THREE.Color();

const POLE_THEME = {
  pole1: {
    label: 'Architecture Souveraine & Diplomatie',
    accent: 0xc8963e,
    stone: 0xefe5d1,
    roof: 0x1d2b3a,
    plaza: '#d8ccb4'
  },
  pole2: {
    label: 'Pôle Économique, Finances & Industrie',
    accent: 0xd2521b,
    stone: 0xeae1cf,
    roof: 0x2a241e,
    plaza: '#d5c7af'
  },
  pole3: {
    label: 'Pôle Infrastructures, Énergie & IA',
    accent: 0x1f6f5b,
    stone: 0xebe3d3,
    roof: 0x1a2628,
    plaza: '#d0c8b6'
  },
  pole4: {
    label: 'Pôle Capital Humain, Culture & Territoires',
    accent: 0xb9471a,
    stone: 0xf1e6d2,
    roof: 0x3b2316,
    plaza: '#dccab1'
  }
};

function createProceduralPlazaTexture(baseHex, maxAnisotropy) {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = baseHex;
  ctx.fillRect(0, 0, size, size);

  const step = 64;
  for (let y = 0; y < size; y += step) {
    for (let x = 0; x < size; x += step) {
      const shade = ((x / step + y / step) % 2 === 0) ? 'rgba(255,255,255,0.08)' : 'rgba(60,40,15,0.06)';
      ctx.fillStyle = shade;
      ctx.fillRect(x + 2, y + 2, step - 4, step - 4);
    }
  }

  ctx.strokeStyle = 'rgba(110, 88, 56, 0.22)';
  ctx.lineWidth = 2;
  for (let i = 0; i <= size; i += step) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, size);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(size, i);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(8, 8);
  tex.anisotropy = maxAnisotropy;
  return tex;
}

function createContactShadowTexture() {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(128, 128, 12, 128, 128, 120);
  grad.addColorStop(0, 'rgba(15, 10, 4, 0.45)');
  grad.addColorStop(0.65, 'rgba(15, 10, 4, 0.16)');
  grad.addColorStop(1, 'rgba(15, 10, 4, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function createBeveledRectShape(w, d) {
  const shape = new THREE.Shape();
  const hw = w / 2;
  const hd = d / 2;
  shape.moveTo(-hw, -hd);
  shape.lineTo(hw, -hd);
  shape.lineTo(hw, hd);
  shape.lineTo(-hw, hd);
  shape.closePath();
  return shape;
}

function buildPavilionGroup(poleKey, disposables) {
  const theme = POLE_THEME[poleKey] || POLE_THEME.pole1;
  const group = new THREE.Group();

  // Matériaux PBR contrastés (variation de roughness >= 0.25)
  const stoneMat = new THREE.MeshStandardMaterial({
    color: theme.stone,
    roughness: 0.78,
    metalness: 0.04
  });
  const slateMat = new THREE.MeshStandardMaterial({
    color: theme.roof,
    roughness: 0.56,
    metalness: 0.18
  });
  const bronzeMat = new THREE.MeshStandardMaterial({
    color: theme.accent,
    roughness: 0.22,
    metalness: 0.88
  });
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xb9d8e8,
    roughness: 0.08,
    metalness: 0.05,
    clearcoat: 1.0,
    transmission: isSoftwareGl ? 0 : 0.68,
    transparent: true,
    opacity: isSoftwareGl ? 0.55 : 1.0,
    ior: 1.52,
    thickness: 0.4
  });
  const greenMat = new THREE.MeshStandardMaterial({ color: 0x0f7b4c, roughness: 0.35, metalness: 0.25 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xf2c13a, roughness: 0.24, metalness: 0.82 });
  const redMat = new THREE.MeshStandardMaterial({ color: 0xd2521b, roughness: 0.35, metalness: 0.25 });

  disposables.materials.push(stoneMat, slateMat, bronzeMat, glassMat, greenMat, goldMat, redMat);

  // 1-2. Socle et emmarchement biseautés posés au sol (y = 0)
  const step1Geo = new THREE.ExtrudeGeometry(createBeveledRectShape(9.2, 6.8), {
    depth: 0.28,
    bevelEnabled: true,
    bevelThickness: 0.06,
    bevelSize: 0.08,
    bevelSegments: 2
  });
  step1Geo.rotateX(-Math.PI / 2);
  step1Geo.translate(0, 0.06, 0);
  const step1 = new THREE.Mesh(step1Geo, stoneMat);
  step1.castShadow = true;
  step1.receiveShadow = true;
  group.add(step1);

  const step2Geo = new THREE.ExtrudeGeometry(createBeveledRectShape(7.8, 5.4), {
    depth: 0.28,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.06,
    bevelSegments: 2
  });
  step2Geo.rotateX(-Math.PI / 2);
  step2Geo.translate(0, 0.38, 0);
  const step2 = new THREE.Mesh(step2Geo, stoneMat);
  step2.castShadow = true;
  step2.receiveShadow = true;
  group.add(step2);

  // 3. Corps principal vitré & aile centrale (silhouette primaire)
  const coreWidth = poleKey === 'pole2' ? 4.4 : 5.8;
  const coreHeight = poleKey === 'pole2' ? 4.8 : 2.9;
  const coreDepth = 3.6;

  const coreGeo = new THREE.BoxGeometry(coreWidth, coreHeight, coreDepth);
  const coreMesh = new THREE.Mesh(coreGeo, stoneMat);
  coreMesh.position.y = 0.71 + coreHeight / 2;
  coreMesh.castShadow = true;
  coreMesh.receiveShadow = true;
  group.add(coreMesh);

  const glassBandGeo = new THREE.BoxGeometry(coreWidth + 0.08, coreHeight * 0.56, coreDepth * 0.84);
  const glassBand = new THREE.Mesh(glassBandGeo, glassMat);
  glassBand.position.y = 0.71 + coreHeight * 0.52;
  group.add(glassBand);

  disposables.geometries.push(step1Geo, step2Geo, coreGeo, glassBandGeo);

  // 4. Colonnade périphérique (détail secondaire)
  const pillarGeo = new THREE.CylinderGeometry(0.14, 0.17, coreHeight + 0.1, 14);
  disposables.geometries.push(pillarGeo);
  const pillarCount = 6;
  for (let i = 0; i < pillarCount; i++) {
    const x = -2.6 + (i / (pillarCount - 1)) * 5.2;
    for (const zSign of [-1, 1]) {
      const col = new THREE.Mesh(pillarGeo, stoneMat);
      col.position.set(x, 0.71 + (coreHeight + 0.1) / 2, zSign * 2.15);
      col.castShadow = true;
      col.receiveShadow = true;
      group.add(col);
    }
  }

  // 5. Couronnement architectural spécifique au pôle (Lathe / Extrude / Tube)
  const roofY = 0.71 + coreHeight;
  const corniceGeo = new THREE.ExtrudeGeometry(createBeveledRectShape(6.4, 4.9), {
    depth: 0.24,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.08,
    bevelSegments: 2
  });
  corniceGeo.rotateX(-Math.PI / 2);
  corniceGeo.translate(0, roofY + 0.04, 0);
  const cornice = new THREE.Mesh(corniceGeo, slateMat);
  cornice.castShadow = true;
  cornice.receiveShadow = true;
  group.add(cornice);
  disposables.geometries.push(corniceGeo);

  if (poleKey === 'pole1' || poleKey === 'pole4') {
    // Coupole tournée au tour (LatheGeometry) + anneau bronze
    const lathePts = [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(1.85, 0.0),
      new THREE.Vector2(1.85, 0.3),
      new THREE.Vector2(1.65, 0.75),
      new THREE.Vector2(1.15, 1.25),
      new THREE.Vector2(0.45, 1.55),
      new THREE.Vector2(0.0, 1.65)
    ];
    const domeGeo = new THREE.LatheGeometry(lathePts, 32);
    const dome = new THREE.Mesh(domeGeo, poleKey === 'pole1' ? slateMat : bronzeMat);
    dome.position.y = roofY + 0.34;
    dome.castShadow = true;
    group.add(dome);

    const ringGeo = new THREE.TorusGeometry(1.88, 0.07, 12, 36);
    ringGeo.rotateX(Math.PI / 2);
    const ring = new THREE.Mesh(ringGeo, bronzeMat);
    ring.position.y = roofY + 0.42;
    group.add(ring);

    disposables.geometries.push(domeGeo, ringGeo);
  } else if (poleKey === 'pole2') {
    // Attique prismatique financier + aile latérale
    const crownGeo = new THREE.CylinderGeometry(1.1, 1.75, 1.15, 6);
    const crown = new THREE.Mesh(crownGeo, bronzeMat);
    crown.position.y = roofY + 0.88;
    crown.castShadow = true;
    group.add(crown);

    const wingGeo = new THREE.BoxGeometry(2.1, 2.5, 3.0);
    for (const side of [-1, 1]) {
      const wing = new THREE.Mesh(wingGeo, slateMat);
      wing.position.set(side * 3.05, 0.71 + 1.25, 0);
      wing.castShadow = true;
      wing.receiveShadow = true;
      group.add(wing);
    }
    disposables.geometries.push(crownGeo, wingGeo);
  } else {
    // Arche d'infrastructure & d'innovation numérique (TubeGeometry) + mât solaire
    const archCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.6, roofY + 0.25, 0),
      new THREE.Vector3(-1.3, roofY + 1.8, 0),
      new THREE.Vector3(0, roofY + 2.25, 0),
      new THREE.Vector3(1.3, roofY + 1.8, 0),
      new THREE.Vector3(2.6, roofY + 0.25, 0)
    ]);
    const archGeo = new THREE.TubeGeometry(archCurve, 32, 0.14, 12, false);
    const arch = new THREE.Mesh(archGeo, bronzeMat);
    arch.castShadow = true;
    group.add(arch);

    const solarGeo = new THREE.BoxGeometry(3.8, 0.1, 2.0);
    const solar = new THREE.Mesh(solarGeo, glassMat);
    solar.position.set(0, roofY + 0.52, 0);
    solar.rotation.x = 0.18;
    group.add(solar);
    disposables.geometries.push(archGeo, solarGeo);
  }

  // 6. Emblème tricolore frontal (Vert, Or, Rouge) — accent identitaire du Bénin
  const crestGroup = new THREE.Group();
  const barGeo = new THREE.BoxGeometry(0.45, 0.18, 0.08);
  disposables.geometries.push(barGeo);
  const bGreen = new THREE.Mesh(barGeo, greenMat);
  bGreen.position.x = -0.5;
  const bGold = new THREE.Mesh(barGeo, goldMat);
  bGold.position.x = 0;
  const bRed = new THREE.Mesh(barGeo, redMat);
  bRed.position.x = 0.5;
  crestGroup.add(bGreen, bGold, bRed);
  crestGroup.position.set(0, roofY + 0.18, 2.52);
  group.add(crestGroup);

  return group;
}

function buildSurroundingInstancedTrees(scene, disposables) {
  const count = 24;
  const trunkGeo = new THREE.CylinderGeometry(0.11, 0.16, 1.4, 8);
  trunkGeo.translate(0, 0.7, 0);
  const crownGeo = new THREE.ConeGeometry(0.78, 1.85, 9);
  crownGeo.translate(0, 2.0, 0);

  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c4028, roughness: 0.9, metalness: 0.0 });
  const crownMat = new THREE.MeshStandardMaterial({ color: 0x2e6b43, roughness: 0.72, metalness: 0.04 });

  disposables.geometries.push(trunkGeo, crownGeo);
  disposables.materials.push(trunkMat, crownMat);

  const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, count);
  const crowns = new THREE.InstancedMesh(crownGeo, crownMat, count);
  trunks.castShadow = true;
  crowns.castShadow = true;

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const radius = 10.5 + (i % 3) * 2.2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const s = 0.85 + ((i * 37) % 100) / 300; // ±15% variation déterministe

    _dummy.position.set(x, 0, z);
    _dummy.rotation.y = angle;
    _dummy.scale.set(s, s, s);
    _dummy.updateMatrix();

    trunks.setMatrixAt(i, _dummy.matrix);
    crowns.setMatrixAt(i, _dummy.matrix);

    _color.setHSL(0.37 + ((i % 5) - 2) * 0.012, 0.42, 0.28 + (i % 3) * 0.03);
    crowns.setColorAt(i, _color);
  }

  trunks.instanceMatrix.needsUpdate = true;
  crowns.instanceMatrix.needsUpdate = true;
  if (crowns.instanceColor) crowns.instanceColor.needsUpdate = true;
  trunks.computeBoundingSphere();
  crowns.computeBoundingSphere();

  scene.add(trunks, crowns);
}

class Ministry3DController {
  constructor() {
    this.container = null;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.controls = null;
    this.pavilion = null;
    this.keyLight = null;
    this.hemiLight = null;
    this.pmremEnv = null;
    this.resizeObserver = null;
    this.disposables = { geometries: [], materials: [], textures: [] };
    this.staticDisposables = { geometries: [], materials: [] };

    this.frameId = 0;
    this.renderBusy = false;
    this.renderDirty = false;
    this.autoRotate = true;
    this.isTransitioning = false;
    this.lastTs = performance.now();
    this.lightingMode = 'day';
  }

  disposePavilion() {
    if (this.pavilion && this.scene) {
      this.scene.remove(this.pavilion);
      this.pavilion = null;
    }
    this.disposables.geometries.forEach((g) => g.dispose());
    this.disposables.materials.forEach((m) => m.dispose());
    this.disposables.geometries = [];
    this.disposables.materials = [];
  }

  dispose() {
    cancelAnimationFrame(this.frameId);
    clearTimeout(this.frameId);
    this.frameId = 0;
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    this.disposePavilion();
    this.staticDisposables.geometries.forEach((g) => g.dispose());
    this.staticDisposables.materials.forEach((m) => m.dispose());
    this.staticDisposables.geometries = [];
    this.staticDisposables.materials = [];
    this.disposables.textures.forEach((t) => t.dispose());
    this.disposables.textures = [];
    if (this.pmremEnv) {
      this.pmremEnv.dispose();
      this.pmremEnv = null;
    }
    if (this.controls) {
      this.controls.dispose();
      this.controls = null;
    }
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.domElement?.remove();
      this.renderer = null;
    }
    this.scene = null;
    this.camera = null;
    this.container = null;
  }

  afterDraw(cb) {
    if (!this.renderer) return;
    const gl = this.renderer.getContext();
    const sync = gl.fenceSync?.(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
    gl.flush();
    const poll = () => {
      const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
      if (state === gl.UNSIGNALED) {
        this.frameId = window.setTimeout(poll, 5);
      } else {
        if (sync) gl.deleteSync(sync);
        this.frameId = window.setTimeout(cb, 80);
      }
    };
    this.frameId = window.setTimeout(poll, 5);
  }

  requestRender() {
    if (!this.renderer || !this.scene || !this.camera) return;
    if (this.renderBusy) {
      this.renderDirty = true;
      return;
    }
    this.renderBusy = true;
    this.frameId = requestAnimationFrame(() => {
      this.renderDirty = false;
      const now = performance.now();
      const dt = Math.min((now - this.lastTs) / 1000, 0.05);
      this.lastTs = now;

      if (this.isTransitioning) {
        this.camera.position.x = THREE.MathUtils.damp(this.camera.position.x, _camGoalPos.x, 5.5, dt);
        this.camera.position.y = THREE.MathUtils.damp(this.camera.position.y, _camGoalPos.y, 5.5, dt);
        this.camera.position.z = THREE.MathUtils.damp(this.camera.position.z, _camGoalPos.z, 5.5, dt);
        this.controls.target.x = THREE.MathUtils.damp(this.controls.target.x, _camGoalTarget.x, 5.5, dt);
        this.controls.target.y = THREE.MathUtils.damp(this.controls.target.y, _camGoalTarget.y, 5.5, dt);
        this.controls.target.z = THREE.MathUtils.damp(this.controls.target.z, _camGoalTarget.z, 5.5, dt);
        if (this.camera.position.distanceTo(_camGoalPos) < 0.04) {
          this.isTransitioning = false;
        }
      }

      this.controls.update();
      this.renderer.render(this.scene, this.camera);

      const done = () => {
        this.renderBusy = false;
        if (this.renderDirty || this.isTransitioning || (this.autoRotate && !isSoftwareGl)) {
          this.requestRender();
        }
      };

      if (isSoftwareGl) this.afterDraw(done);
      else done();
    });
  }

  setPreset(name) {
    if (!this.camera || !this.controls) return;
    if (name === 'facade') {
      _camGoalPos.set(0, 3.8, 12.2);
      _camGoalTarget.set(0, 2.2, 0);
    } else if (name === 'survol') {
      _camGoalPos.set(9.5, 11.2, 10.5);
      _camGoalTarget.set(0, 1.4, 0);
    } else {
      _camGoalPos.set(10.5, 6.2, 11.4);
      _camGoalTarget.set(0, 1.8, 0);
    }
    this.isTransitioning = true;
    this.requestRender();
  }

  setLighting(mode) {
    if (!this.scene || !this.keyLight || !this.hemiLight) return;
    this.lightingMode = mode;
    if (mode === 'dusk') {
      this.scene.background.setHex(0x232433);
      this.scene.fog.color.setHex(0x232433);
      this.keyLight.color.setHex(0xffb078);
      this.keyLight.intensity = 2.0;
      this.hemiLight.color.setHex(0x6d7aa8);
      this.hemiLight.groundColor.setHex(0x3a2618);
      this.hemiLight.intensity = 0.65;
    } else {
      this.scene.background.setHex(0xebe2d1);
      this.scene.fog.color.setHex(0xebe2d1);
      this.keyLight.color.setHex(0xfff1dc);
      this.keyLight.intensity = 2.2;
      this.hemiLight.color.setHex(0xcbe0f5);
      this.hemiLight.groundColor.setHex(0x8a6e4b);
      this.hemiLight.intensity = 0.8;
    }
    this.requestRender();
  }

  toggleAutoRotate() {
    this.autoRotate = !this.autoRotate;
    if (this.controls) {
      this.controls.autoRotate = !isSoftwareGl && this.autoRotate;
    }
    this.requestRender();
    return this.autoRotate;
  }

  mount(container, ministry) {
    if (!container || !ministry) return;

    if (this.container !== container || !this.renderer) {
      this.dispose();
      this.container = container;

      const width = Math.max(container.clientWidth || 640, 320);
      const height = Math.max(container.clientHeight || 420, 300);

      this.renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        powerPreference: 'high-performance'
      });
      this.renderer.outputColorSpace = THREE.SRGBColorSpace;
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.08;
      this.renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
      this.renderer.setSize(width, height);
      this.renderer.shadowMap.enabled = !isSoftwareGl;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      container.innerHTML = '';
      container.appendChild(this.renderer.domElement);

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xebe2d1);
      this.scene.fog = new THREE.FogExp2(0xebe2d1, 0.022);

      const pmrem = new THREE.PMREMGenerator(this.renderer);
      this.pmremEnv = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      this.scene.environment = this.pmremEnv;
      pmrem.dispose();

      this.camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 160);
      this.camera.position.set(10.5, 6.2, 11.4);

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = !isSoftwareGl;
      this.controls.dampingFactor = 0.06;
      this.controls.enableZoom = false;
      this.controls.minDistance = 6;
      this.controls.maxDistance = 28;
      this.controls.maxPolarAngle = Math.PI / 2.08;
      this.controls.target.set(0, 1.8, 0);
      this.controls.autoRotate = !isSoftwareGl && this.autoRotate;
      this.controls.autoRotateSpeed = 0.8;

      this.renderer.domElement.addEventListener('pointerdown', () => {
        if (this.controls) this.controls.enableZoom = true;
      });
      this.renderer.domElement.addEventListener('pointerleave', () => {
        if (this.controls) this.controls.enableZoom = false;
      });
      this.renderer.domElement.addEventListener('wheel', (ev) => {
        if (this.controls && (ev.ctrlKey || ev.metaKey)) {
          this.controls.enableZoom = true;
        }
      }, { passive: true });

      this.controls.addEventListener('start', () => {
        this.isTransitioning = false;
      });
      this.controls.addEventListener('change', () => {
        this.requestRender();
      });

      // Éclairage studio 3 points chaud/froid
      this.hemiLight = new THREE.HemisphereLight(0xcbe0f5, 0x8a6e4b, 0.8);
      this.scene.add(this.hemiLight);

      this.keyLight = new THREE.DirectionalLight(0xfff1dc, 2.2);
      this.keyLight.position.set(14, 22, 12);
      this.keyLight.castShadow = !isSoftwareGl;
      this.keyLight.shadow.mapSize.set(1024, 1024);
      this.keyLight.shadow.camera.left = -15;
      this.keyLight.shadow.camera.right = 15;
      this.keyLight.shadow.camera.top = 15;
      this.keyLight.shadow.camera.bottom = -15;
      this.keyLight.shadow.camera.near = 1;
      this.keyLight.shadow.camera.far = 55;
      this.keyLight.shadow.bias = -0.0005;
      this.keyLight.shadow.normalBias = 0.02;
      this.scene.add(this.keyLight);

      const rimLight = new THREE.DirectionalLight(0xaec8e8, 0.55);
      rimLight.position.set(-12, 8, -14);
      this.scene.add(rimLight);

      // Sol esplanade étendu + texture procédurale
      const theme = POLE_THEME[ministry.pole] || POLE_THEME.pole1;
      const plazaTex = createProceduralPlazaTexture(theme.plaza, this.renderer.capabilities.getMaxAnisotropy());
      const shadowTex = createContactShadowTexture();
      this.disposables.textures.push(plazaTex, shadowTex);

      const groundGeo = new THREE.CircleGeometry(65, 64);
      groundGeo.rotateX(-Math.PI / 2);
      const groundMat = new THREE.MeshStandardMaterial({
        map: plazaTex,
        roughness: 0.92,
        metalness: 0.02
      });
      const ground = new THREE.Mesh(groundGeo, groundMat);
      ground.receiveShadow = true;
      this.scene.add(ground);

      const contactGeo = new THREE.PlaneGeometry(14, 11);
      contactGeo.rotateX(-Math.PI / 2);
      const contactMat = new THREE.MeshBasicMaterial({
        map: shadowTex,
        transparent: true,
        depthWrite: false
      });
      const contactShadow = new THREE.Mesh(contactGeo, contactMat);
      contactShadow.position.y = 0.02;
      this.scene.add(contactShadow);

      this.staticDisposables.geometries.push(groundGeo, contactGeo);
      this.staticDisposables.materials.push(groundMat, contactMat);

      buildSurroundingInstancedTrees(this.scene, this.staticDisposables);

      if (!isSoftwareGl) {
        this.renderer.compile(this.scene, this.camera);
      }

      this.resizeObserver = new ResizeObserver(() => {
        if (!this.container || !this.renderer || !this.camera) return;
        const w = Math.max(this.container.clientWidth, 280);
        const h = Math.max(this.container.clientHeight, 260);
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
        this.requestRender();
      });
      this.resizeObserver.observe(container);
    }

    this.disposePavilion();
    this.pavilion = buildPavilionGroup(ministry.pole, this.disposables);
    this.scene.add(this.pavilion);

    this.setLighting(this.lightingMode);
    this.setPreset('overview');
  }
}

const controller = new Ministry3DController();

window.Ministry3DScene = {
  mount: (container, ministry) => controller.mount(container, ministry),
  setPreset: (name) => controller.setPreset(name),
  setLighting: (mode) => controller.setLighting(mode),
  toggleAutoRotate: () => controller.toggleAutoRotate(),
  dispose: () => controller.dispose(),
  getThemeLabel: (pole) => (POLE_THEME[pole] || POLE_THEME.pole1).label
};
