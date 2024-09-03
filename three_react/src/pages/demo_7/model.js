import * as THREE from "three"

// 创建一个空的几何体顶对象(自定义的几何体)
const geometry = new THREE.BufferGeometry()

// 类型化数组定义的一组顶点坐标数据
const vertices = new Float32Array([
  0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 30, 0, 0, 80, 50, 30, 10,
])
// 创建缓冲区对象
const attribute = new THREE.BufferAttribute(vertices, 3) // 3个为一组
// 将顶点坐标数据添加到几何体顶对象中
geometry.attributes.position = attribute

// 创建一个材质对象 -- 线材质
const material = new THREE.LineBasicMaterial({
  color: 0xffff00,
})

const line = new THREE.Line(geometry, material)

export default line
