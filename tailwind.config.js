import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const twCssConfig = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [typography()],
};

export default twCssConfig;