import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";
import {OrbitControls} from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js";
import {OBJLoader} from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/loaders/OBJLoader.js";

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const camera = new THREE.PerspectiveCamera(25, w / h, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

function init(geometry) {
  const material = new THREE.MeshMatcapMaterial({
    matcap: new THREE.TextureLoader().load("./file/black-n-shiney.jpg")
  });

  const floorMaterial = new THREE.MeshStandardMaterial({
    color: "#777777",
    metalness: 0.2,
    roughness: 0.6,
    envMapIntensity: 0.5,
    side: THREE.DoubleSide
    // map: map,
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  var spotLight = new THREE.SpotLight(new THREE.Color("white"), 1.5);
  spotLight.position.set(5, 100, 0);
  spotLight.castShadow = true;
  scene.add(spotLight);

  var sphereLight = new THREE.SphereGeometry(50);
  var sphereLightMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color("white")
  });

  // const sunlight = new THREE.DirectionalLight(0xffffff);
  // sunlight.position.y = 2;
  // scene.add(sunlight);

  // const filllight = new THREE.DirectionalLight(0x88ccff);
  // filllight.position.x = 1;
  // filllight.position.y = -2;
  // scene.add(filllight);

  // THREE.ImageUtils.crossOrigin = '';
  // var floorMap = THREE.ImageUtils.loadTexture("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG76Ug6KATmlUnoLoZV8xJFLK2zGo3Jvw7xqyFSd3iBUue7PZ3");
  // floorMap.wrapS = floorMap.wrapT = THREE.RepeatWrapping;
  // floorMap.repeat.set(50, 50);

  // var groundMaterial = new THREE.MeshPhongMaterial({
  //   color: new THREE.Color('#111'),
  //   specular: new THREE.Color('#808000'),
  //   //specular: new THREE.Color('#333'),
  //   shininess: 0,
  //   bumpMap: floorMap
  // });
  // var groundGeo = new THREE.PlaneGeometry(200, 200);
  // var ground = new THREE.Mesh(groundGeo, groundMaterial);

  // ground.position.set(0, 0, 0);
  // ground.rotation.x = (-Math.PI / 2);
  // ground.receiveShadow = true;
  // scene.add(ground);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
}

const loader = new OBJLoader();
loader.load("./file/floating_01.obj", (obj) => {
  console.log(obj);
  init(obj.children[0].geometry);
});

function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", handleWindowResize, false);
