import * as THREE from 'three';

// 创建一个透视投影相机对象
// fov 视野 角度
// aspect 宽高比
// near 近平面
// far 远平面
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 设置相机位置
camera.position.set(10, 10, 10);

// 相机的视线 观察目标点的坐标
camera.lookAt(0, 0, 0); // mesh.position

// 定义相机输出