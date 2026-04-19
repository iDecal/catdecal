import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    date: z.string(),
    image: z.string(),
  }),
});

// Tên key ở đây (blog) PHẢI trùng với tên thư mục (src/content/blog)
export const collections = {
  'blog': blogCollection,
};
