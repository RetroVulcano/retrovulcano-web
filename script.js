(() => {
  'use strict';
  const btn = document.querySelector('.hamb');
  const menu = document.getElementById('menu');
  if (!btn || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    btn.textContent = open ? '✕' : '☰';
  };

  btn.addEventListener('click', () => setOpen(!menu.classList.contains('open')));

  // Cierra al pulsar un enlace del menú
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });

  // Cierra con Escape y devuelve el foco al botón
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      setOpen(false);
      btn.focus();
    }
  });

  // Si se pasa a escritorio con el menú abierto, lo restablece
  window.matchMedia('(min-width:851px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
})();
