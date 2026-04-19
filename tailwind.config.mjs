/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Màu Đỏ chủ đạo cho các nút Action, CTA, Logo
				primary: '#EB4C4C', 
				'primary-dark': '#D63031', // Màu đỏ đậm hơn khi hover
				
				// Hệ thống màu Xám kỹ thuật cho phong cách Industrial
				secondary: '#2D3436', // Xám than đậm cho Header/Footer/Heading
				
				// Màu nền (Background)
				background: '#F5F6F7', // Xám cực nhạt làm nền toàn trang
				'surface': '#FFFFFF',   // Trắng thuần cho các Card, Section nội dung
				
				// Màu chữ (Copy)
				copy: '#1E293B',        // Xám đen cho nội dung chính
				'copy-muted': '#64748B', // Xám nhạt cho mô tả phụ
				
				// Màu bổ trợ cho các đường kẻ hoặc viền (Border)
				divider: '#DFE6E9',
			},
			fontFamily: {
				// Giữ nguyên font chuyên nghiệp cho tiếng Việt
				heading: ['"Be Vietnam Pro"', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
			},
			borderRadius: {
				'custom': '0.625rem', 
			},
			boxShadow: {
				// Đổ bóng nhẹ cho các khối decal nổi trên nền xám
				'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
			}
		},
	},
	plugins: [],
}
