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
  50,
  50,
  0, // 顶点3
  0,
  50,
  0, // 顶点4
])

// 创建缓冲区对象
const attribute = new THREE.BufferAttribute(vertices, 3) // 3个为一组
// 将顶点坐标数据添加到几何体顶对象中
geometry.setAttribute("position", attribute)

// 类型化数组创建顶点数据
const indices = new Uint16Array([0, 1, 2, 0, 2, 3]) // 保持顺序一致，顺/逆时针
geometry.setIndex(new THREE.BufferAttribute(indices, 1))

const normals = new Float32Array([
  0,
  0,
  1, // 顶点1法向量
  0,
  0,
  1, // 顶点2
  0,
  0,
  1, // 顶点3
  0,
  0,
  1, // 顶点4
])
geometry.setAttribute("normal", new THREE.BufferAttribute(normals, 3))

// 创建一个材质对象 -- 网格模型
// const material = new THREE.MeshBasicMaterial({
//   color: 0xffff00,
//   side: THREE.DoubleSide,
// })
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  side: THREE.DoubleSide,
})

const mesh = new THREE.Mesh(geometry, material)

export default mesh
