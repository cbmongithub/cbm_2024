import fs from "node:fs";
import path from "node:path";
import plaiceholder from "@plaiceholder/tailwindcss";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		typography({ target: "modern" }),
		plaiceholder({
			resolver: (src) =>
				fs.readFileSync(path.join("app/_assets/img/", `${src}.jpg`)),
		}),
	],
};