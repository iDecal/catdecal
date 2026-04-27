import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://idecal.vn',
   output: 'hybrid', 
  integrations: [tailwind(), sitemap()],
  // Tích hợp Tailwind CSS
  integrations: [tailwind()],
  
});
