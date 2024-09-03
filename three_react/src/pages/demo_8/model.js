import * as THREE from "three"

// 创建一个空的几何体顶对象(自定义的几何体)
const geometry = new THREE.BufferGeometry()

// 类型化数组定义的一组顶点坐标数据
const vertices = new Float32Array([
  0,
  0,
  0, // 顶点1
  50,
  0,
  0, // 顶点2
  0,
  50,
  0, // 顶点3
  50,
  50,
  0, // 顶点4
  0,
  0,
  30, // 顶点5
  50,
  0,
  30, // 顶点6
])

// 创建缓冲区对象
const attribute = new THREE.BufferAttribute(vertices, 3) // 3个为一组
// 将顶点坐标数据添加到几何体顶对象中
geometry.attributes.position = attribute

// 创建一个材质对象 -- 网格模型
const material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
})

const mesh = new THREE.Mesh(geometry, material)

export default mesh
