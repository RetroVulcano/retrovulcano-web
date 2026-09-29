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

// Nave 8-bit: animación por pasos controlada con JS (mismo resultado en cualquier navegador)
(() => {
  'use strict';
  const ship = document.querySelector('.pixel-ship');
  if (!ship) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const g = (n) => ship.querySelector('[data-a="' + n + '"]');
  const parts = [
    // [elemento, duración ms, un valor por fase]
    [g('d'), 1400, ['translate(0 0)', 'translate(-2 -1)', 'translate(-4 -2)', 'translate(-2 -1)'], 'transform'],
    [g('k'), 1100, ['translate(0 0)', 'translate(0 -2)', 'translate(0 -4)', 'translate(0 -2)'], 'transform'],
    [g('s'), 1100, ['rotate(0 132 91)', 'rotate(-6 132 91)', 'rotate(-12 132 91)', 'rotate(-6 132 91)'], 'transform'],
    [g('f'), 350, ['.7', '.85', '1', '.85'], 'opacity']
  ].filter((p) => p[0]);

  let raf = 0;
  const reset = () => parts.forEach(([el, , v, attr]) => el.setAttribute(attr, v[0]));
  const tick = (t) => {
    parts.forEach(([el, dur, v, attr]) => {
      el.setAttribute(attr, v[Math.floor(((t % dur) / dur) * 4)]);
    });
    raf = requestAnimationFrame(tick);
  };
  const start = () => { if (!raf) raf = requestAnimationFrame(tick); };
  const stop = () => { cancelAnimationFrame(raf); raf = 0; reset(); };
  const sync = () => (reduce.matches ? stop() : start());

  sync();
  if (reduce.addEventListener) reduce.addEventListener('change', sync);
  else if (reduce.addListener) reduce.addListener(sync);
})();
