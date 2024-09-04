import * as THREE from "three"

const geometry = new THREE.BoxGeometry(50, 50, 50) // 立方体
const material = new THREE.MeshLambertMaterial({
  color: 0xff00,
  transparent: true,
  opacity: 0.5,
  side: THREE.DoubleSide,
  // wireframe: true, // 线条模式渲染mesh对应的三角形数据
})

const mesh = new THREE.Mesh(geometry, material)
const mesh_1 = new THREE.Mesh(geometry, material)

mesh.position.y = 60
mesh_1.position.y = -60

// 创建组对象
// 可以通过组对象控制组内所有几何体
const group = new THREE.Group()
// const group = new THREE.Object3D()
group.add(mesh)
group.add(mesh_1)

group.translateX(50)
group.scale.set(1.5, 1.5, 1.5)

export default group
