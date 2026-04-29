/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,sss,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Thêm dòng này để sửa lỗi build
				secondary: '#004d33', 
                
				brand: {
					red: '#D92128',
					cyan: '#32B8E8',
					lime: '#A7C928',
					purple: '#B855A1',
				},
				admin: {
					dark: '#2c3338',
					blue: '#2271b1',
					surface: '#f0f0f1',
					border: '#dcdcde',
				}
			},
            // ... các phần khác giữ nguyên
		},
	},
	plugins: [],
}
