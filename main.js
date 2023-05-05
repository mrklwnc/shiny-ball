import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// * Create our sphere
// Geometry is the shape or the 3D object
const geometry = new THREE.SphereGeometry(3, 64, 32);
// Material is the design of the shape
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83",
});
// mesh is the combination of the geometry and material
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10); // x, y, and z position
scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.z = 20;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webGL");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
