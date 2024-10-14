// @ts-nocheck

import "../css/style.css";
import * as THREE from "three";
import colorShader from "../shaders/color.glsl";
import fragmentShader from "../shaders/fragment.glsl";
import vertexShader from "../shaders/vertex.glsl";

// Scene setup
const scene = new THREE.Scene();
const vMouse = new THREE.Vector2();
const vMouseDamp = new THREE.Vector2();
const vResolution = new THREE.Vector2();

// Viewport setup (updated on resize)
let w = 0;
let h = 1;

// Orthographic camera setup
const aspect = w / h;
const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

const onPointerMove = (e) => {
	vMouse.set(e.pageX, e.pageY);
};
document.addEventListener("mousemove", onPointerMove);
document.addEventListener("pointermove", onPointerMove);
document.body.addEventListener(
	"touchmove",
	(e) => {
		e.preventDefault();
	},
	{ passive: false }
);

// Plane geometry covering the full viewport
const geo = new THREE.PlaneGeometry(1, 1); // Scaled to cover full viewport

// Shader material creation
const mat = new THREE.ShaderMaterial({
	// vertexShader: /* glsl */ `
	//   varying vec2 v_texcoord;
	//   void main() {
	//       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	//       v_texcoord = uv;
	//   }`,
	vertexShader: vertexShader,
	vertexColors: colorShader,
	glslVersion: THREE.GLSL3,
	extensions: {
		derivatives: true,
	},
	visible: true,
	transparent: false,
	depthTest: true,
	depthWrite: true,
	polygonOffset: true,
	polygonOffsetFactor: 10,
	fragmentShader: fragmentShader, // most of the action happening in the fragment
	uniforms: {
		u_mouse: { value: vMouseDamp },
		u_resolution: { value: vResolution },
		u_pixelRatio: { value: 2 },
	},
	defines: {
		VAR: 3,
	},
});

// Mesh creation
const quad = new THREE.Mesh(geo, mat);
scene.add(quad);

// Camera position and orientation
camera.position.z = 1; // Set appropriately for orthographic

// Animation loop to render
let time = 0;
let lastTime = 0;
const update = () => {
	// calculate delta time
	time = performance.now() * 0.001;
	const dt = time - lastTime;
	lastTime = time;

	// ease mouse motion with damping
	for (const k in vMouse) {
		if (k === "x" || k === "y")
			vMouseDamp[k] = THREE.MathUtils.damp(vMouseDamp[k], vMouse[k], 8, dt);
	}

	// render scene
	requestAnimationFrame(update);
	renderer.render(scene, camera);
};
update();

const resize = () => {
	w = window.innerWidth;
	h = window.innerHeight;

	const dpr = Math.min(window.devicePixelRatio, 2);

	renderer.setSize(w, h);
	renderer.setPixelRatio(dpr);

	camera.left = -w / 2;
	camera.right = w / 2;
	camera.top = h / 2;
	camera.bottom = -h / 2;
	camera.updateProjectionMatrix();

	quad.scale.set(w, h, 1);
	vResolution.set(w, h).multiplyScalar(dpr);
	mat.uniforms.u_pixelRatio.value = dpr;
};
resize();

window.addEventListener("resize", resize);

const Motion = document.body.appendChild(renderer.domElement);
export default Motion;
