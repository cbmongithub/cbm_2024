import { useControls } from "leva";

const config = {
	object: {
		shape: "decagon",
		seed: {
			value: 1,
			min: 1,
			max: 100,
			step: 1,
		},
		gradientStrength: {
			value: 1,
			min: 1,
			max: 3,
			step: 0.001,
		},
		color: "#af00ff",
		speed: {
			value: 1.1,
			min: 0,
			max: 20,
			step: 0.001,
		},
		noiseStrength: {
			value: 0.3,
			min: 0,
			max: 3,
			step: 0.001,
		},
		displacementStrength: {
			value: 0.57,
			min: 0,
			max: 1,
			step: 0.001,
		},
		fractAmount: {
			value: 4,
			min: 0,
			max: 10,
			step: 1,
		},
		roughness: {
			min: 0,
			max: 1,
			step: 0.001,
			value: 0.56,
		},
		metalness: {
			min: 0,
			max: 1,
			step: 0.001,
			value: 0.76,
		},
		clearcoat: {
			min: 0,
			max: 1,
			step: 0.001,
			value: 0,
		},
		reflectivity: {
			min: 0,
			max: 1,
			step: 0.001,
			value: 0.46,
		},
		ior: {
			min: 0.001,
			max: 5,
			step: 0.001,
			value: 2.81,
		},
		iridescence: {
			min: 0,
			max: 1,
			step: 0.001,
			value: 0.96,
		},
	},
	ambient_light: {
		ambientLightColor: "#ffffff",
		ambientLightIntensity: {
			min: 0,
			max: 10,
			step: 0.001,
			value: 1,
		},
	},
	directional_light: {
		directionalLightColor: "#fff",
		directionalLightIntensity: {
			value: 5,
			min: 0,
			max: 5,
			step: 0.001,
		},
		directionalLightPositionX: {
			value: -2,
			min: -10,
			max: 10,
			step: 0.001,
		},
		directionalLightPositionY: {
			value: 2,
			min: -10,
			max: 10,
			step: 0.001,
		},
		directionalLightPositionZ: {
			value: 3.5,
			min: -10,
			max: 10,
			step: 0.001,
		},
	},
};

export default config;
