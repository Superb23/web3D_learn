import * as THREE from "three"

// 创建一个空的几何体顶对象
const geometry = new THREE.BufferGeometry()

// 类型化数组定义的一组顶点坐标数据
const vertices = new Float32Array([
  0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 30, 0, 0, 100, 50, 30, 10,
])

const attribute = new THREE.BufferAttribute(vertices, 3)
// 将顶点坐标数据添加到几何体顶对象中
geometry.attributes.position = attribute

// 创建一个材质对象
const material = new THREE.PointsMaterial({
  color: 0xffff00,
  size: 10,
})

const points = new THREE.Points(geometry, material)

export default points
