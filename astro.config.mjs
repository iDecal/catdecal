import { defineConfig } from 'astro/config';

// Tên miền chính thức cho canonical và Open Graph.
export default defineConfig({
  site: 'https://catdecal.vn',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
