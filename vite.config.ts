import { fileURLToPath as nodeFileURLToPath } from "node:url";
import reactPlugin from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import glslPlugin from "vite-plugin-glsl";

export default defineConfig({
	plugins: [
		glslPlugin({
			exclude: undefined, // File paths/extensions to ignore
			include: "**/*.{glsl,wgsl,vert,frag,vs,fs}", // File paths/extensions to import
			defaultExtension: "glsl", // Shader suffix when no extension is specified
			warnDuplicatedImports: true, // Warn if the same chunk was imported multiple times
			compress: true, // Compress the resulting shader code
		}),
		reactPlugin(),
	],
	root: "src",
	base: "./",
	build: {
		outDir: "../dist",
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
function fileURLToPath(arg0: URL): string {
	return nodeFileURLToPath(arg0);
}
