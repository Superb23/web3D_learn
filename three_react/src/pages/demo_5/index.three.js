import * as THREE from "three"
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Stats from "three/examples/jsm/libs/stats.module.js"

const scene = new THREE.Scene()

// 球
// const geometry = new THREE.SphereGeometry(100)
// 圆柱
// const geometry = new THREE.CylinderGeometry(100, 100, 200, 100)
// 圆环
// const geometry = new THREE.TorusKnotGeometry(100, 50, 100, 100)
// 圆锥
// const geometry = new THREE.ConeGeometry(50, 100, 100)
// 方块
const geometry = new THREE.BoxGeometry(100, 100, 100)
// 矩形平面
// const geometry = new THREE.PlaneGeometry(100, 100)

// (漫反射)
// const material = new THREE.MeshBasicMaterial({
//   color: 0xff0000,
//   transparent: true,
//   opacity: 0.5,
//   side: THREE.DoubleSide, // 双面可见
// })
// 高光材质(镜面反射)
const material = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  shininess: 90, // 高光系数
  specular: 0xffffff, // 高光颜色
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// 三维坐标系
const axes = new THREE.AxesHelper(1000)
scene.add(axes)

// 3.平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7)
directionalLight.position.set(10, 10, 10)
scene.add(directionalLight)
// 环境光
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambientLight)

// 可视平行光
// const directionalLightHelper = new THREE.DirectionalLightHelper(
//   directionalLight,
//   1
// )
// scene.add(directionalLightHelper)

const width = (window.innerWidth * 2) / 3
const height = (window.innerHeight * 2) / 3

const camera = new THREE.PerspectiveCamera(95, width / height, 0.1, 6000)
camera.position.set(150, 150, 150)
camera.lookAt(0, 0, 0)

// canvas画布
const renderer = new THREE.WebGLRenderer({
  antialias: true, // 抗锯齿
})
renderer.setSize(width, height)
renderer.render(scene, camera)
// render设置像素比，根据当前设备
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setClearColor(0x000000, 0.5)

document.getElementById("demo_5")?.appendChild(renderer.domElement)

// 性能统计
const stats = Stats()
document.getElementById("demo_5")?.appendChild(stats.dom)

// gui
const gui = new GUI().close()
gui.domElement.style.right = "10px"
const guiControl = {
  isRolate: false,
}
// 菜单
const materialGui = gui.addFolder("材质")
const lightGui = gui.addFolder("光源").close()
const positionGui = gui.addFolder("位置").close()

// 渲染循环
// const clock = new THREE.Clock()
function render() {
  stats.update() // 刷新帧率
  guiControl.isRolate && cube.rotateY(0.01)
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
}

lightGui
  .add(directionalLight, "intensity", 0, 2)
  .name("平行光强度")
  .onChange(function () {
    renderer.render(scene, camera)
  })
lightGui.add(ambientLight, "intensity", 0, 1).name("环境光强度")

materialGui.add(cube.position, "x", [-100, 0, 100]).name("x坐标")
materialGui.add(cube.position, "y", -500, 500).name("y坐标")
materialGui.add(cube.position, "z", -500, 500).name("z坐标")

positionGui.add(guiControl, "isRolate").name("是否旋转")
