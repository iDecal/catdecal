const extensions = new Set(['ai','svg','pdf','cdr','eps','dxf','png','jpg','jpeg']);
const maxFileBytes = 20 * 1024 * 1024;
const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' } });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/bao-gia') return env.ASSETS.fetch(request);
    if (request.method !== 'POST') return json({ error: 'Phương thức không được hỗ trợ.' }, 405);
    if (!env.QUOTES_BUCKET) return json({ error: 'Chưa cấu hình kho lưu file Cloudflare R2.' }, 503);
    const type = request.headers.get('content-type') || '';
    if (!type.toLowerCase().startsWith('multipart/form-data')) return json({ error: 'Dữ liệu gửi không đúng định dạng.' }, 415);
    const length = Number(request.headers.get('content-length') || 0);
    if (length > 105 * 1024 * 1024) return json({ error: 'Dung lượng yêu cầu quá lớn.' }, 413);
    let form;
    try { form = await request.formData(); } catch { return json({ error: 'Không đọc được dữ liệu.' }, 400); }
    if (String(form.get('website') || '').trim()) return json({ ok: true, id: 'received' }); // honeypot
    const field = (name, max = 500) => String(form.get(name) || '').trim().slice(0, max);
    const name = field('name', 120), phone = field('phone', 40);
    if (!name || !/^[+\d\s().-]{8,25}$/.test(phone)) return json({ error: 'Cần nhập họ tên và số điện thoại hợp lệ.' }, 400);
    const files = form.getAll('files');
    if (!files.length || files.length > 5) return json({ error: 'Cần chọn từ 1 đến 5 file.' }, 400);
    let total = 0;
    for (const file of files) {
      if (!(file instanceof File) || !file.size || file.size > maxFileBytes) return json({ error: 'Mỗi file phải có dung lượng từ 1 B đến 20 MB.' }, 400);
      const ext = (file.name.split('.').pop() || '').toLowerCase();
      if (!extensions.has(ext)) return json({ error: 'Định dạng file không được hỗ trợ.' }, 400);
      total += file.size;
    }
    if (total > 100 * 1024 * 1024) return json({ error: 'Tổng dung lượng tối đa 100 MB.' }, 413);
    const id = new Date().toISOString().slice(0, 10).replaceAll('-', '') + '-' + crypto.randomUUID().slice(0, 8);
    const prefix = `quotes/${id}/`;
    const metadata = {
      id, createdAt: new Date().toISOString(), name, phone,
      material: field('material', 120), color: field('color', 120),
      width: field('width', 40), height: field('height', 40), quantity: field('quantity', 40),
      transferLayer: field('transferLayer', 5), note: field('note', 3000),
      files: []
    };
    try {
      for (const [index, file] of files.entries()) {
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(-110) || 'upload';
        const key = `${prefix}${index + 1}-${safeName}`;
        await env.QUOTES_BUCKET.put(key, file.stream(), { httpMetadata: { contentType: 'application/octet-stream', contentDisposition: 'attachment' } });
        metadata.files.push({ key, originalName: file.name.slice(0, 255), size: file.size });
      }
      await env.QUOTES_BUCKET.put(`${prefix}request.json`, JSON.stringify(metadata, null, 2), { httpMetadata: { contentType: 'application/json' } });
    } catch (error) {
      console.error('Quote upload failed', error);
      return json({ error: 'Lưu yêu cầu thất bại, vui lòng thử lại hoặc liên hệ trực tiếp.' }, 500);
    }
    return json({ ok: true, id }, 201);
  }
};
