import data from './products.json';

export type Product = (typeof data)[number];
export const products: Product[] = data;

/** Sản phẩm liên quan: ưu tiên cùng nhóm, thiếu thì lấy thêm nhóm khác. */
export function relatedTo(slug: string, limit = 3): Product[] {
  const cur = products.find((p) => p.slug === slug);
  const others = products.filter((p) => p.slug !== slug);
  const same = others.filter((p) => cur && p.cat === cur.cat);
  const rest = others.filter((p) => !(cur && p.cat === cur.cat));
  return [...same, ...rest].slice(0, limit);
}
