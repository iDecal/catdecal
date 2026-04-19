// src/scripts/menu.js
export default function initMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconPath = document.getElementById('icon-path');
  
  // Accordion Mobile
  const accordionBtn = document.getElementById('accordion-btn');
  const accordionContent = document.getElementById('accordion-content');
  const accordionArrow = document.getElementById('accordion-arrow');

  // Toggle Main Mobile Menu
  if (menuBtn && mobileMenu && iconPath) {
    menuBtn.onclick = () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      if (isHidden) {
        iconPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
      } else {
        iconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
      }
    };
  }

  // Toggle Accordion Dịch vụ
  if (accordionBtn && accordionContent && accordionArrow) {
    accordionBtn.onclick = () => {
      const isExpanded = accordionContent.classList.toggle('hidden');
      accordionArrow.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
    };
  }
}
