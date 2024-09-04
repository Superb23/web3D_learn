import * as THREE from "three"

// const geometry = new THREE.PlaneGeometry(100, 50, 2, 1) // 矩形平面
// const geometry = new THREE.SphereGeometry(50, 30, 20) // 球体
const geometry = new THREE.BoxGeometry(50, 50, 50) // 立方体
// const geometry = new THREE.TetrahedronGeometry(100, 100) // 四面体

// geometry.rotateX(Math.PI / 2)
// geometry.rotateY(Math.PI / 2)

// console.log(geometry.attributes.position)
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  side: THREE.DoubleSide,
  // wireframe: true, // 线条模式渲染mesh对应的三角形数据
})

const mesh = new THREE.Mesh(geometry, material)

// 创建三维向量
// const vector = new THREE.Vector3(100, 100, 100)

mesh.position.set(100, 0, 100)
mesh.scale.set(10, 10, 10)

export default mesh
