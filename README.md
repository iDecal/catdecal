# Website Decal Cắt Chữ (Astro)

Website tĩnh (static) viết bằng [Astro](https://astro.build), tiếng Việt, sẵn sàng deploy lên Cloudflare.

## Chạy thử trên máy

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # xuất ra thư mục dist/
npm run preview
```

Cần Node.js 20 trở lên (khuyến nghị 22, xem `.nvmrc`).

## Deploy lên Cloudflare

### Cách 1: Cloudflare Pages (kết nối Git)
1. Đẩy thư mục này lên GitHub/GitLab.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
4. Biến môi trường: `NODE_VERSION` = `22`.

### Cách 2: Wrangler (đẩy trực tiếp)
```bash
npm install
npm run build
npx wrangler login
npx wrangler deploy        # dùng wrangler.jsonc, phục vụ thư mục dist/
```
Đổi `name` trong `wrangler.jsonc` theo tên project bạn muốn.

## Cấu trúc

```
src/
  components/   Header, Footer, Scene (tranh minh họa SVG)
  layouts/      Layout.astro (head, font, khung trang)
  data/         products.json (10 sản phẩm), products.ts (hàm sản phẩm liên quan)
  pages/
    index.astro            Trang chủ
    san-pham/[slug].astro  Trang sản phẩm (tự sinh từ products.json)
    blog/                  Danh sách + 2 bài viết
    gioi-thieu.astro       Về chúng tôi
    dich-vu.astro          Cắt decal theo yêu cầu (form + chọn file)
    vat-lieu.astro         Vật liệu và thương hiệu
    404.astro
public/         favicon, robots.txt
```

## Thêm sản phẩm mới
Thêm một object vào `src/data/products.json` (copy một mục có sẵn, đổi `slug`, `cat`, `scene`, nội dung và `page`).
Trang chi tiết, thẻ ở trang chủ và mục "Sản phẩm liên quan" tự cập nhật. `scene` / `page.kind` nhận: kinh, mo, xe, quang, tuong, ten.

## Việc cần làm trước khi chạy thật
- Thay các chỗ giữ chỗ trong ngoặc vuông: `[SỐ ĐIỆN THOẠI]`, `[EMAIL]`, `[TÊN THƯƠNG HIỆU]`, `[GIÁ]`, `[ĐỊA CHỈ]`, `[NĂM]`, `[KÍCH THƯỚC]`, `[DÒNG SẢN PHẨM]`... (tìm bằng `grep -rn "\[" src`).
- Thêm `site: 'https://ten-mien-cua-ban.com'` vào `astro.config.mjs` khi đã có tên miền.
- Video hướng dẫn ở trang Giới thiệu đang là khung giữ chỗ: chèn video thật (YouTube/Cloudflare Stream).
- Form ở trang Dịch vụ chạy phía trình duyệt: mở email (mailto) hoặc sao chép nội dung gửi Zalo; **file chưa được tải lên server**. Muốn nhận file trực tiếp, nối form với Cloudflare Pages Functions + R2, hoặc Formspree/Tally.
- Tên thương hiệu 3M, Avery Dennison, ORACAL đang hiển thị dạng chữ, không dùng logo. Chỉ thêm logo nếu bạn được phép dùng.

## Cập nhật – tiếp nhận báo giá trực tiếp (Cloudflare Worker + R2)

Bản nâng cấp thêm nút **Gửi báo giá kèm file**, API `POST /api/bao-gia`, lưu yêu cầu dưới dạng `quotes/<mã>/request.json` và tối đa 5 tệp (20 MB/tệp) vào **R2 riêng tư**. API chỉ hoạt động sau khi thiết lập R2; trước đó nút sẽ thông báo lỗi rõ ràng, khách vẫn có thể dùng email/Zalo. Email nhận báo giá: hi@idecal.vn; hotline/Zalo: 0866077040.

1. Tạo R2 bucket: `npx wrangler r2 bucket create decal-quote-files` (yêu cầu tài khoản Cloudflare đã bật R2 và đăng nhập Wrangler).
2. Mở `wrangler.jsonc`, bỏ dấu `//` trước dòng `r2_buckets` để kích hoạt binding `QUOTES_BUCKET`.
3. Chạy `npm run build && npx wrangler dev` để thử cả API, sau đó `npm run deploy` để phát hành. `npm run dev` chỉ chạy Astro tĩnh, **không** xử lý `/api/bao-gia`.
4. Xem danh sách yêu cầu trong dashboard Cloudflare R2 hoặc qua Wrangler (`npx wrangler r2 object get decal-quote-files/quotes/MÃ/request.json --file request.json --remote`). Tệp lưu riêng tư, không phát URL truy cập công khai.
5. Thay placeholder liên hệ; điền `site` trong `astro.config.mjs` khi có domain chính thức để tạo canonical. Chưa tự gửi thông báo email/Telegram và chưa có trang quản trị, thanh toán hoặc chống spam nâng cao. Nên bổ sung Cloudflare Turnstile, giới hạn lượt gửi/rate limit, xác thực quản trị và chính sách lưu/xoá dữ liệu trước khi công khai rộng rãi.

**Bảo mật:** Không đặt các tệp R2 ở chế độ công khai. File người dùng tải lên chưa được kiểm tra malware; nhân viên cần thận trọng khi mở file thiết kế. API có kiểm tra phần mở rộng, số lượng, dung lượng và honeypot cơ bản; chưa thay thế WAF/rate limiting.


## Thông tin thương hiệu (22/10/2026)
- Tên hiển thị: CatDecal.vn
- Tên miền: https://catdecal.vn
- Dịch vụ: Cắt decal theo yêu cầu
- Khu vực hoạt động: TP. Hồ Chí Minh; giao hàng toàn quốc.
- Đã cập nhật số điện thoại/Zalo 0866077040 và email hi@idecal.vn.
