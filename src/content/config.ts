import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    date: z.string(), // Hoặc z.date() nếu bạn dùng định dạng chuẩn YYYY-MM-DD
    image: z.string(),
  }),
});

export const collections = {
  'blog': blog,
};
