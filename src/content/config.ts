import { defineCollection, z } from 'astro:content';

// Cấu hình cho Blog (Bạn đã có)
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    date: z.date().or(z.string()), // Chấp nhận cả định dạng ngày và chuỗi
    image: z.string(),
  }),
});

// Cấu hình cho Dịch vụ (Thêm mới để dùng với Decap)
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featured_image: z.string().optional(),
    date: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'services': servicesCollection, // Tương ứng với thư mục src/content/services
};
