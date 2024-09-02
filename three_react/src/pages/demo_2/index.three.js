import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Stats from "three/examples/jsm/libs/stats.module.js"

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(10, 10, 10)
// 光源照射成像
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: 0.5,
})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// 三维坐标系
const axes = new THREE.AxesHelper(80)
scene.add(axes)

// 1.点光源(存在发光点)
// const light = new THREE.PointLight(0xffffff, 1, 1000, 0)
// light.position.set(10, 10, -10)
// scene.add(light)
// 可视点光源
// const lightHelper = new THREE.PointLightHelper(light, 1)
// scene.add(lightHelper)

// 2.环境光(无方向)
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
// scene.add(ambientLight)

// 3.平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
directionalLight.position.set(10, 20, 30)
scene.add(directionalLight)
// 可视平行光
// const directionalLightHelper = new THREE.DirectionalLightHelper(
//   directionalLight,
//   1
// )
// scene.add(directionalLightHelper)

const width = window.innerWidth / 2
const height = window.innerHeight / 2

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 800)
camera.position.set(10, 10, 10)
camera.lookAt(0, 0, 0)

// canvas画布
const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
renderer.render(scene, camera)
document.getElementById("demo_2")?.appendChild(renderer.domElement)

// 性能统计
const stats = Stats()
document.getElementById("demo_2")?.appendChild(stats.dom)

// 渲染循环
// const clock = new THREE.Clock()
function render() {
  stats.update() // 刷新帧率
  cube.rotateY(0.01)
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}
render()

// 相机控件
const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener("change", function () {
  renderer.render(scene, camera)
})

window.onresize = function () {
  const width = window.innerWidth / 2
  const height = window.innerHeight / 2
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
  // renderer.render(scene, camera)
}
