/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Màu Cam đậm làm chủ đạo (Primary)
				primary: '#EA580C', 
				
				// Màu Xám than đậm cho các nút bấm hoặc điểm nhấn cần sự mạnh mẽ
				secondary: '#334155', 
				
				// Màu cam nhạt bổ trợ cho các vùng nhẹ nhàng hoặc hover
				accent: '#FFEDD5',    
				
				// Nền trắng sạch sẽ
				background: '#FFFFFF',
				
				// Màu chữ chính (Xám đen để dịu mắt hơn đen thuần)
				copy: '#1E293B',
				'copy-muted': '#64748B',
			},
			fontFamily: {
				heading: ['"Be Vietnam Pro"', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
			},
			borderRadius: {
				'custom': '0.625rem', 
			}
		},
	},
	plugins: [],
}
