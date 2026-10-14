/**
 * three-hero.js — lightweight molecular network for the home hero.
 *
 * Lazy-loaded as an ES module by main.js (only when the hero is in view
 * and the device is capable). Designed for very low geometry count.
 *
 * Features:
 *  - ~28 particle nodes + ~70 connecting lines (well below 200 objects)
 *  - pixelRatio capped at 1.5
 *  - Mouse / gyroscope parallax
 *  - Paused when hero out of view (IntersectionObserver)
 *  - Paused when tab hidden (visibilitychange)
 *  - Debounced resize
 *  - Proper disposal on unload
 *  - Graceful fallback if WebGL unsupported
 *
 * Public:  export function initHero3D(mount: HTMLElement): void
 */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js';

export function initHero3D(mount) {
  if (!mount) return;

  // WebGL capability check
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) { mount.setAttribute('data-fallback', 'true'); return; }
  } catch (e) { mount.setAttribute('data-fallback', 'true'); return; }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) { mount.setAttribute('data-fallback', 'true'); return; }

  // ── Scene ────────────────────────────────────────────────────────────
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 12);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(mount.clientWidth, mount.clientHeight);
  renderer.setClearColor(0x000000, 0);
  mount.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-hidden', 'true');
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.style.display = 'block';

  // ── Build molecular network ──────────────────────────────────────────
  const NODE_COUNT = 28;
  const NODE_RADIUS = 8;
  const positions = new Float32Array(NODE_COUNT * 3);
  const nodes = [];

  for (let i = 0; i < NODE_COUNT; i++) {
    // Distribute on a sphere with some randomness
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = NODE_RADIUS * (0.65 + Math.random() * 0.35);
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    positions[i * 3] = x; positions[i * 3 + 1] = y; positions[i * 3 + 2] = z;
    nodes.push({ x, y, z, vx: (Math.random() - 0.5) * 0.005, vy: (Math.random() - 0.5) * 0.005, vz: (Math.random() - 0.5) * 0.005 });
  }

  // Nodes as InstancedMesh of small icosahedrons (single material, very cheap)
  const nodeGeo = new THREE.IcosahedronGeometry(0.18, 0);
  const nodeMat = new THREE.MeshBasicMaterial({ color: 0x14a3b0, transparent: true, opacity: 0.9 });
  const nodeMesh = new THREE.InstancedMesh(nodeGeo, nodeMat, NODE_COUNT);
  nodeMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  scene.add(nodeMesh);

  // Highlight a few "core" nodes in amber
  const coreCount = 4;
  const coreGeo = new THREE.IcosahedronGeometry(0.32, 0);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 1.0 });
  const coreMesh = new THREE.InstancedMesh(coreGeo, coreMat, coreCount);
  scene.add(coreMesh);
  const coreIndices = new Set();
  while (coreIndices.size < coreCount) coreIndices.add(Math.floor(Math.random() * NODE_COUNT));

  // Lines: connect each node to its nearest 2 neighbors
  const linePositions = [];
  const lineDistances = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const dists = [];
    for (let j = 0; j < NODE_COUNT; j++) {
      if (i === j) continue;
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dz = nodes[i].z - nodes[j].z;
      dists.push({ j, d: Math.sqrt(dx * dx + dy * dy + dz * dz) });
    }
    dists.sort((a, b) => a.d - b.d);
    for (let k = 0; k < 2; k++) {
      const j = dists[k].j;
      if (j > i) { // avoid duplicates
        linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
        lineDistances.push(dists[k].d);
      }
    }
  }
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  const lineMat = new THREE.LineBasicMaterial({ color: 0x1a4f8a, transparent: true, opacity: 0.35 });
  const lineSegments = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(lineSegments);

  // Add a few faint background stars (just points, very cheap)
  const starCount = 60;
  const starPositions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    starPositions[i * 3] = (Math.random() - 0.5) * 30;
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    starPositions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 10;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
  const starMat = new THREE.PointsMaterial({ color: 0x6aa6d6, size: 0.05, transparent: true, opacity: 0.5 });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  // ── Mouse / gyro parallax ────────────────────────────────────────────
  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  const onMouse = (e) => {
    const rect = mount.getBoundingClientRect();
    target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  };
  const onOrient = (e) => {
    if (e.beta == null || e.gamma == null) return;
    target.x = Math.max(-1, Math.min(1, e.gamma / 30));
    target.y = Math.max(-1, Math.min(1, (e.beta - 45) / 30));
  };
  window.addEventListener('mousemove', onMouse, { passive: true });
  window.addEventListener('deviceorientation', onOrient, { passive: true });

  // ── Animation loop ───────────────────────────────────────────────────
  const dummy = new THREE.Object3D();
  let rafId = null;
  let isVisible = true;
  let startTime = performance.now();

  function animate() {
    rafId = requestAnimationFrame(animate);
    if (!isVisible) return;

    const t = (performance.now() - startTime) * 0.001;

    // Update node positions (gentle drift, wrap around sphere boundary)
    const posAttr = nodeMesh.instanceMatrix;
    for (let i = 0; i < NODE_COUNT; i++) {
      const n = nodes[i];
      n.x += n.vx; n.y += n.vy; n.z += n.vz;
      // soft boundary: if too far, reverse velocity
      const r2 = n.x * n.x + n.y * n.y + n.z * n.z;
      if (r2 > NODE_RADIUS * NODE_RADIUS) { n.vx *= -1; n.vy *= -1; n.vz *= -1; }
      // gentle oscillation
      n.x += Math.sin(t * 0.5 + i) * 0.002;
      n.y += Math.cos(t * 0.4 + i) * 0.002;
      dummy.position.set(n.x, n.y, n.z);
      const pulse = 1 + Math.sin(t * 1.5 + i) * 0.15;
      dummy.scale.setScalar(pulse);
      dummy.updateMatrix();
      nodeMesh.setMatrixAt(i, dummy.matrix);
    }
    nodeMesh.instanceMatrix.needsUpdate = true;

    // Update core nodes
    let coreIdx = 0;
    const coreList = Array.from(coreIndices);
    for (const i of coreList) {
      const n = nodes[i];
      dummy.position.set(n.x, n.y, n.z);
      const pulse = 1 + Math.sin(t * 1.8 + i) * 0.25;
      dummy.scale.setScalar(pulse);
      dummy.updateMatrix();
      coreMesh.setMatrixAt(coreIdx, dummy.matrix);
      coreIdx++;
    }
    coreMesh.instanceMatrix.needsUpdate = true;

    // Update line positions (since nodes move)
    const lp = lineGeo.attributes.position.array;
    let li = 0;
    for (let i = 0; i < NODE_COUNT; i++) {
      const dists = [];
      for (let j = 0; j < NODE_COUNT; j++) {
        if (i === j) continue;
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dz = nodes[i].z - nodes[j].z;
        dists.push({ j, d: Math.sqrt(dx * dx + dy * dy + dz * dz) });
      }
      dists.sort((a, b) => a.d - b.d);
      for (let k = 0; k < 2; k++) {
        const j = dists[k].j;
        if (j > i) {
          lp[li++] = nodes[i].x; lp[li++] = nodes[i].y; lp[li++] = nodes[i].z;
          lp[li++] = nodes[j].x; lp[li++] = nodes[j].y; lp[li++] = nodes[j].z;
        }
      }
    }
    lineGeo.attributes.position.needsUpdate = true;

    // Camera parallax (lerp toward target)
    current.x += (target.x - current.x) * 0.05;
    current.y += (target.y - current.y) * 0.05;
    camera.position.x = current.x * 1.5;
    camera.position.y = -current.y * 1.5;
    camera.lookAt(0, 0, 0);

    // Slow rotation of entire scene for ambient motion
    scene.rotation.y += 0.0008;
    scene.rotation.x = Math.sin(t * 0.15) * 0.05;

    renderer.render(scene, camera);
  }

  // ── Visibility / pause management ────────────────────────────────────
  const visObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      isVisible = e.isIntersecting;
      if (isVisible && !rafId) animate();
      else if (!isVisible && rafId) { cancelAnimationFrame(rafId); rafId = null; }
    });
  }, { threshold: 0.05 });
  visObserver.observe(mount);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    } else if (isVisible && !rafId) {
      animate();
    }
  });

  // ── Resize (debounced) ───────────────────────────────────────────────
  let resizeTimer = null;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (!mount.clientWidth || !mount.clientHeight) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    }, 150);
  };
  window.addEventListener('resize', onResize, { passive: true });

  // ── Cleanup on pagehide ──────────────────────────────────────────────
  const cleanup = () => {
    if (rafId) cancelAnimationFrame(rafId);
    window.removeEventListener('mousemove', onMouse);
    window.removeEventListener('deviceorientation', onOrient);
    window.removeEventListener('resize', onResize);
    visObserver.disconnect();
    nodeGeo.dispose(); nodeMat.dispose();
    coreGeo.dispose(); coreMat.dispose();
    lineGeo.dispose(); lineMat.dispose();
    starGeo.dispose(); starMat.dispose();
    renderer.dispose();
    if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
  };
  window.addEventListener('pagehide', cleanup, { once: true });

  // Kick off
  animate();
}
