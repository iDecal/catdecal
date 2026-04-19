/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,sss,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#008358',
					dark: '#006b48',
				},
				secondary: '#004d33',
				surface: '#f5f5f5',
				copy: {
					DEFAULT: '#2f2f2f',
					light: '#626262',
				},
				divider: '#e5e5e5',
			},
		},
	},
	plugins: [],
}
