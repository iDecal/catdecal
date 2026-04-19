// src/scripts/menu.js
export default function initMenu() { // Thêm chữ default ở đây
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconPath = document.getElementById('icon-path');

  if (menuBtn && mobileMenu && iconPath) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      
      if (isHidden) {
        iconPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
      } else {
        iconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
      }
    });
  }
}
