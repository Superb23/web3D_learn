import * as THREE from 'three';

// 1.创建一个三维场景scene
const scene = new THREE.Scene();

// 2.给三维场景添加一个物品

// 2.1 创建一个几何体对象
const geometry = new THREE.BoxGeometry(1, 1, 1);
// 2.2 创建一个材质对象
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// 2.3 创建一个网格模型
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, 1);
// 2.4 将网格模型添加到三维场景中
scene.add(mesh);