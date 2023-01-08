/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	mode: "jit",
	theme: {
		extend: {
			fontFamily: {
				nokia: "'Noticia Text', serif",
				ssp: "'Source Sans Pro', sans-serif",
			},
		},
	},
	plugins: [],
};
