import preact from "@preact/preset-vite";
import glslPlugin from "vite-plugin-glsl";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		glslPlugin({
			exclude: undefined, // File paths/extensions to ignore
			include: "**/*.{glsl,wgsl,vert,frag,vs,fs}", // File paths/extensions to import
			defaultExtension: "glsl", // Shader suffix when no extension is specified
			warnDuplicatedImports: true, // Warn if the same chunk was imported multiple times
			compress: false, // Compress the resulting shader code
		}),
		preact({
			prerender: {
				enabled: true,
				renderTarget: "#app",
				additionalPrerenderRoutes: ["/", "/home",],
				previewMiddlewareEnabled: true,
				previewMiddlewareFallback: "/home",
			},
		}),
	],
	root: '/src',
	base: '.',
	publicDir: '/public',
	optimizeDeps: {
			"exclude": ["@react-three/drei", "@react-three/fiber"]
	},
	build: {
			target: 'esnext',
			emptyOutDir: true,
			outDir: '../dist',
			cssCodeSplit: true,
			cssMinify: true,
},
resolve: {
	alias: {
		react: "preact/compat/",
		"react-dom": "preact/compat"
	},
},
}
);
