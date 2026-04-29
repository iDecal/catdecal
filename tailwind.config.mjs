/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,sss,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				// WordPress sử dụng hệ thống font hệ điều hành, Inter rất phù hợp để thay thế
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			colors: {
				// Màu chủ đạo theo phong cách Admin WP
				primary: {
					DEFAULT: '#2271b1', // Màu xanh đặc trưng của nút và link trong WP
					dark: '#135e96',    // Màu khi hover
					contrast: '#f6f7f7',
				},
				// Sidebar và Topbar (Màu xám đen WP)
				admin: {
					sidebar: '#2c3338',
					hover: '#1d2327',
					sub: '#262c33',
				},
				// Màu nền và bề mặt
				surface: {
					DEFAULT: '#f0f0f1', // Nền xám nhạt đặc trưng của WP Admin
					white: '#ffffff',
				},
				copy: {
					DEFAULT: '#3c434a', // Màu chữ chính (không dùng đen tuyền)
					light: '#646970',   // Màu chữ chú thích
				},
				divider: '#dcdcde',     // Màu viền chuẩn WP
			},
			boxShadow: {
				// WP sử dụng đổ bóng rất nhẹ hoặc viền mảnh
				'wp': '0 1px 1px rgba(0,0,0,.04)',
			},
			lineHeight: {
				tight: '1.3', 
				snug: '1.5',
			},
			letterSpacing: {
				tight: '-0.01em',
			}
		},
	},
	plugins: [],
}
