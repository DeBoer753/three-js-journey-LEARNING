import * as THREE from 'three'
import gsap from 'gsap'

console.log(gsap);

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera3
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Clock 
const clock = new THREE.Clock()

// Animate
gsap.to(mesh.position, { duration: 3, delay: 1, x: 2})
gsap.to(mesh.position, { duration: 4, delay: 3.7, x: 0})
gsap.to(mesh.rotation, {duration: 7, delay: 1, y: Math.PI * 2 })

// Animations option 2
const tick = () => {

    // CLock
    // const elapsedTime = clock.getElapsedTime()
    
    // Update Objects
    // mesh.position.y = Math.sin(elapsedTime)
    // mesh.position.x = Math.cos(elapsedTime)
    // camera.lookAt(mesh.position) // this now allows us to always have the camera on the object which is mesh
    
    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
    
}

tick()
