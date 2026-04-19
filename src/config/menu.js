// src/config/menu.js

export const menuData = [
  { 
    name: "Trang chủ", 
    href: "/" 
  },
  { 
    name: "Dịch vụ cắt", 
    href: "/dich-vu",
    submenu: [
      { name: "Cắt Chữ & Logo", href: "/dich-vu/cat-chu-logo" },
      { name: "Bế Tem Nhãn (Sticker)", href: "/dich-vu/be-tem-nhan" },
      { name: "Trang Trí Nội Thất", href: "/dich-vu/trang-tri-noi-that" },
      { name: "Cắt Decal Dán Xe", href: "/dich-vu/dan-xe" },
      { name: "Cắt Chuyển Nhiệt", href: "/dich-vu/chuyen-nhiet" },
      { name: "Quảng Cáo Khổ Lớn", href: "/dich-vu/quang-cao-kho-lon" }
    ]
  },
  { 
    name: "Vật liệu", 
    href: "/vat-lieu",
    submenu: [
      { name: "Decal Màu (McCal/Avery)", href: "/vat-lieu/decal-mau" },
      { name: "Decal Mờ (Dán kính)", href: "/vat-lieu/decal-mo" },
      { name: "Decal Trong/Sữa", href: "/vat-lieu/decal-trong" },
      { name: "Phản Quang", href: "/vat-lieu/decal-phan-quang" },
      { name: "Interior Film (Gỗ/Đá)", href: "/vat-lieu/interior-film" },
      { name: "Nam Châm Dẻo", href: "/vat-lieu/nam-cham-deo" }
    ]
  },
  { 
    name: "Blog", 
    href: "/blog" 
  },
  { 
    name: "Báo giá", 
    href: "/bao-gia" 
  },
];
