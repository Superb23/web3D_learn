import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

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
const axes = new THREE.AxesHelper(100)
scene.add(axes)

const light = new THREE.PointLight(0xffffff, 1, 1000, 0)
light.position.set(10, 10, 10)
scene.add(light)

const width = window.innerWidth / 2
const height = window.innerHeight / 2

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 400)
camera.position.set(10, 10, 10)
camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
renderer.render(scene, camera)
document.getElementById("demo_1")?.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener("change", function () {
  renderer.render(scene, camera)
})
