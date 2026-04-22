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
			// Fix lỗi dấu tiếng Việt và tối ưu kích thước
			lineHeight: {
				tight: '1.25', // Tăng nhẹ từ 1.1 lên 1.25 để không chạm dấu
				snug: '1.375',
			},
			letterSpacing: {
				tighter: '-0.02em', // Không nên để quá hẹp (-0.05em dễ lỗi dấu)
			}
		},
	},
	plugins: [],
}
