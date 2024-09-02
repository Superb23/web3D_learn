import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Stats from "three/examples/jsm/libs/stats.module.js"

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(10, 10, 10)

// 光源照射成像
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: 0.5,
})

for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 20; j++) {
    const cube = new THREE.Mesh(geometry, material)
    cube.position.x = i * 15
    cube.position.z = j * 15
    scene.add(cube)
  }
}

// 三维坐标系
const axes = new THREE.AxesHelper(1000)
scene.add(axes)

// 3.平行光
// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
// directionalLight.position.set(10, 20, 30)
// scene.add(directionalLight)
// 可视平行光
// const directionalLightHelper = new THREE.DirectionalLightHelper(
//   directionalLight,
//   1
// )
// scene.add(directionalLightHelper)

const width = (window.innerWidth * 2) / 3
const height = (window.innerHeight * 2) / 3

const camera = new THREE.PerspectiveCamera(95, width / height, 0.1, 6000)
camera.position.set(300, 300, 300)
camera.lookAt(500, 0, 500)

// canvas画布
const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
renderer.render(scene, camera)
document.getElementById("demo_3")?.appendChild(renderer.domElement)

// 性能统计
const stats = Stats()
document.getElementById("demo_3")?.appendChild(stats.dom)

// 渲染循环
// const clock = new THREE.Clock()
function render() {
  stats.update() // 刷新帧率
  // cube.rotateY(0.01)
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
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
  // renderer.render(scene, camera)
}
