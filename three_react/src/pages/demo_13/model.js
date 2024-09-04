import * as THREE from "three"

const lowGroup = new THREE.Group()
lowGroup.name = "洋房"
const highGroup = new THREE.Group()
highGroup.name = "高楼"

for (let i = 0; i < 5; i++) {
  const geometry = new THREE.BoxGeometry(10, 20, 10)
  const material = new THREE.MeshLambertMaterial({
    color: 0x00ff00,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide,
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.name = i + "号楼"
  mesh.position.x = i * 30
  lowGroup.add(mesh)
}
lowGroup.position.y = 15
lowGroup.position.z = 50

for (let i = 0; i < 5; i++) {
  const geometry = new THREE.BoxGeometry(10, 50, 10)
  const material = new THREE.MeshLambertMaterial({
    color: 0x00ff00,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide,
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.name = i + "号楼"
  mesh.position.x = i * 30
  highGroup.add(mesh)
}
highGroup.position.y = 30

const group = new THREE.Group()
group.name = "小区"
group.add(lowGroup)
group.add(highGroup)

group.traverse((child) => {
  // console.log(child.position)
  if (child.isMesh) {
    child.material.color.set(0xff0000)
  }
})

group.getObjectByName("3号楼").material.color.set(0x00ff00)

export default group
