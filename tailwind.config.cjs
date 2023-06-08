/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			white: 'white',
			light: '#f2f2f2',
			gray: '#6c6c6c',
			dark: '#425466',
			black: '#303030'
		},
		extend: {
			letterSpacing: {
				extrawidest: '.25em',
			},
			screens: {
				'xs': '500px'
			}
		},
	},
	plugins: [],
}
