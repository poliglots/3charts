import * as THREE from "three";
import { DragControls } from "three/addons/controls/DragControls.js";

export default function bar(
  domElement = HTMLElement,
  X = [10, 20, 30],
  Y = [],
  color = [0xff5733, 0x33ff42, 0xff5865],
  width = 300,
  height = 300,
  fov = 30,
  aspect = 2,
  near = 0.01,
  far = 1000
) {
  const objects = [];
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 1;

  const scene = new THREE.Scene();

  for (let i = 0; i < X.length; i++) {
    console.log(i);
    const geometry = new THREE.BoxGeometry(0.01, 0.1, 0.1);
    const material = new THREE.MeshNormalMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 0.05 + (i + 1) * 0.05;
    scene.add(mesh);
    console.log("mesh", mesh.position.x);
  }

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.render(scene, camera);
  domElement.appendChild(renderer.domElement);
  const controls = new DragControls(objects, camera, renderer.domElement);
  controls.rotateSpeed = 2;
  controls.addEventListener("drag", render);
}
