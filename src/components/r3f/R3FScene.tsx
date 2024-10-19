import { Canvas } from "@react-three/fiber";
import { Suspense } from "preact/compat";
import { PlaneGeometry } from "three";
import { MathUtils, Mesh, OrthographicCamera, Scene, ShaderMaterial, Vector2, WebGLRenderer } from "three";
import fragmentShader from "./shaders/fragmentShader";
import vertexShader from "./shaders/vertexShader";

// Scene setup
const scene = new Scene();
const vMouse = new Vector2();
const vMouseDamp = new Vector2();
const vResolution = new Vector2();

// Viewport setup (updated on resize)
let w = 0;
let h = 1;

// Orthographic camera setup
const aspect = w / h;
const camera = new OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 1000);

const renderer = new WebGLRenderer();
renderer.domElement.id = "r3f-canvas";
const handleMouseMove = (e: MouseEvent | PointerEvent) => {
	vMouse.set(e.pageX, e.pageY);
};

document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("pointermove", handleMouseMove);
document.body.addEventListener(
	"touchmove",
	(e) => {
		e.preventDefault();
	},
	{ passive: false }
);

// Plane geometry covering the full viewport
const geo = new PlaneGeometry(1, 1); // Scaled to cover full viewport

// Shader material creation
const mat = new ShaderMaterial({
	vertexShader: vertexShader,
	fragmentShader, // most of the action happening in the fragment
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
const quad = new Mesh(geo, mat);
scene.add(quad);

// Camera position and orientation
camera.position.z = 1; // Set appropriately for orthographic
document.getElementById("app")?.appendChild(renderer.domElement);

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
		if (k === "x" || k === "y") {
			vMouseDamp[k] = MathUtils.damp(vMouseDamp[k], vMouse[k], 8, dt);
		}
	}

	// render scene
	requestAnimationFrame(update);
	renderer.render(scene, camera);
};
update();

const handleResize = () => {
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
handleResize();

export const R3Scene = () => {
	return (
		<div id="r3f-wrapper">
			<Suspense fallback={null}>
				<Canvas id={"r3f-canvas"}>
					<mesh>
						<PlaneGeometry args={[1, 1]} />
						<OrthographicCamera position={[0, 0, 1]} />
					</mesh>
				</Canvas>
			</Suspense>
		</div>
	);
};
