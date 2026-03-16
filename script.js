/* Loading Screen */

window.onload = () => {

document.getElementById("loader").style.display="none"

}

const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", e => {

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});




/* THREE JS BACKGROUND */

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({
canvas:document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.setZ(30)

const geometry = new THREE.TorusGeometry(10,3,16,100)

const material = new THREE.MeshStandardMaterial({
color:0x38bdf8
})

const torus = new THREE.Mesh(geometry,material)

scene.add(torus)

const light = new THREE.PointLight(0xffffff)

light.position.set(5,5,5)

scene.add(light)

function animate(){

requestAnimationFrame(animate)

torus.rotation.x +=0.01
torus.rotation.y +=0.005

renderer.render(scene,camera)

}

animate()