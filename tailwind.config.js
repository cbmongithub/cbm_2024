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
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-radial-at-tl":
					"radial-gradient(at top left, var(--tw-gradient-stops))",
				"gradient-radial-at-tr":
					"radial-gradient(at top right, var(--tw-gradient-stops))",
				"gradient-radial-at-br":

					"radial-gradient(at bottom right, var(--tw-gradient-stops))",
				"gradient-radial-at-bl":
					"radial-gradient(at bottom left, var(--tw-gradient-stops))",
				"gradient-radial-at-t":
					"radial-gradient(at top, var(--tw-gradient-stops))",
				"gradient-radial-at-r":
					"radial-gradient(at right, var(--tw-gradient-stops))",
				"gradient-radial-at-b":
					"radial-gradient(at bottom, var(--tw-gradient-stops))",
				"gradient-radial-at-l":
					"radial-gradient(at left, var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [typography({target: "modern"})],
};