const menuButton = document.querySelector('.hamb');
const menu = document.querySelector('.links');

if (menuButton && menu) {
  const setMenu = (open) => {
    menu.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };

  menuButton.addEventListener('click', () => {
    setMenu(!menu.classList.contains('open'));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('header')) setMenu(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 850) setMenu(false);
  });
}
