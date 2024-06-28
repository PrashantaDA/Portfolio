/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		screens: {
			xs: "220px",
			sm: "520px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1536px",
		},
		extend: {
			borderRadius: {
				custom: "61% 39% 74% 26% / 48% 45% 55% 52%    ",
			},
			fontSize: {
				xs: "0.75rem",
				sm: "0.875rem",
				md: "1rem",
				lg: "1.125rem",
				xl: "1.25rem",
				xxl: "1.5rem",
			},
			colors: {
				dark: "#09090b",
				dark2: "#1b1b1b",
				light: "#f0f8ff",
				dtext: "#7289DA",
				darker: "#212944",
			},
			boxShadow: {
				bs1: "#5B6EAE 5px 5px",
				bs2: "#5B6EAE -5px 5px",
			},
		},
	},
	plugins: [animate],
};
