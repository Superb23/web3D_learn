import * as THREE from 'three';

// 创建场景
const scene = new THREE.Scene();

const boxGeometry = new THREE.BoxGeometry(100, 100, 100);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(0, 0, 0);
scene.add(box);

// 创建相机
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.set(100, 100, 100);
camera.lookAt(0, 0, 0);

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement); // canvas画布