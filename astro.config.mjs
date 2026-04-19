// astro.config.mjs
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server', // Hoặc 'hybrid' nếu bạn muốn kết hợp cả trang tĩnh và trang động
  adapter: cloudflare()
});
