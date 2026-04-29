/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,sss,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// ĐỊNH NGHĨA CÁC MÀU BỊ THIẾU Ở ĐÂY
				primary: '#006d83',
				secondary: '#004d33',
				surface: '#f5f5f5',
				copy: {
					DEFAULT: '#3c434a', // Class 'text-copy' sẽ lấy màu này
					light: '#646970',   // Class 'text-copy-light'
				},
				divider: '#e5e5e5',
				// Các màu thương hiệu khác nếu cần
				brand: {
					red: '#D92128',
					cyan: '#32B8E8',
				}
			},
            // ... giữ các phần font hoặc spacing khác
		},
	},
	plugins: [],
}
