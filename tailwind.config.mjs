/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#F1F5F9',    // Xanh xám Pastel (Nền)
        'secondary': '#90CDF4',  // Xanh dương Pastel (Điểm nhấn)
        'accent': '#A3BFFA',     // Xanh tím Pastel
        'copy-dark': '#2D3748',  // Chữ chính (Xám đậm)
        'copy-muted': '#718096', // Chữ phụ (Xám nhạt)
      },
      fontFamily: {
        // Định nghĩa font-heading để sửa lỗi build
        'heading': ['Inter', 'Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
