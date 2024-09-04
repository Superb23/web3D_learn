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
  transparent: true,
  opacity: 0.5,
  side: THREE.DoubleSide,
  // wireframe: true, // 线条模式渲染mesh对应的三角形数据
})

const color = new THREE.Color()
// color.setRGB(1, 0, 0)
color.set("#00ff00")
material.color = color

const mesh = new THREE.Mesh(geometry, material)

const mesh_1 = new THREE.Mesh(geometry, material)

mesh.position.y = 60
mesh_1.position.y = -30

// 公用同一个几何体，两个模型都会受影响
// mesh_1.geometry.translate(30, 0, 0)

// 通过clone可独立
const material_1 = material.clone()
const mesh_2 = new THREE.Mesh(geometry, material_1)
mesh_2.material.color.set("#ff0000")
mesh_2.position.set(60, 0, 0)

const mesh_3 = mesh.copy(mesh)
mesh_3.position.x = -30

export { mesh, mesh_1, mesh_2, mesh_3 }
