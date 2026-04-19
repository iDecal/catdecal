/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Đổi Đen thành Primary (Chủ đạo)
				primary: '#0F172A',   
				
				// Đổi Vàng chanh thành Secondary (Màu nhấn cho button, link)
				secondary: '#DB1A1A', 
				
				// Màu bổ trợ cho các vùng cần sự nhẹ nhàng
				accent: '#1E293B',    
				
				// Nền sạch sẽ
				background: '#FFFFFF',
				
				// Màu chữ trên nền sáng
				copy: '#0F172A',
				'copy-muted': '#475569',
			},
			fontFamily: {
				heading: ['"Be Vietnam Pro"', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
			},
			borderRadius: {
				'custom': '0.625rem', // Theo chuẩn brand md của bạn
			}
		},
	},
	plugins: [],
}
