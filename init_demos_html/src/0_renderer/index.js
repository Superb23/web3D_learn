import * as Three from 'three';

// 创建渲染器对象
const renderer = new Three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// renderer.render(scene, camera);