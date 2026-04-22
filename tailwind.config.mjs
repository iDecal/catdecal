/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,sss,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				// Thiết lập Roboto là font sans mặc định của trang
				sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#008358',
					dark: '#006b48',
				},
				secondary: '#004d33',
				surface: '#f5f5f5',
				copy: {
					DEFAULT: '#000000',
					light: '#626262',
				},
				divider: '#e5e5e5',
			},
			lineHeight: {
				// Cực kỳ quan trọng để không bị đè dấu tiếng Việt ở H1
				tight: '1.25', 
				snug: '1.375',
			},
			letterSpacing: {
				// Roboto có khoảng cách chữ hơi rộng, -0.01em hoặc -0.02em sẽ giúp tiêu đề trông gọn và chuyên nghiệp hơn
				tighter: '-0.02em',
				tight: '-0.01em',
			}
		},
	},
	plugins: [],
}
