import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

// 创建场景
const scene = new THREE.Scene()

const boxGeometry = new THREE.BoxGeometry(100, 100, 100)
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.position.set(50, 50, 50)
scene.add(box)

// 创建三维坐标轴
const axesHelper = new THREE.AxesHelper(1000)
scene.add(axesHelper)

// 创建相机
const width = window.innerWidth / 2
const height = window.innerHeight / 2
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
camera.position.set(500, 500, 500)
camera.lookAt(0, 0, 0)

// 创建渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
renderer.render(scene, camera)
document.getElementById("demo_0")?.appendChild(renderer.domElement) // canvas画布

// 设置相机控件轨道控制器
const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener("change", function () {
  renderer.render(scene, camera)
})
