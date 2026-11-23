'use strict';

/* ---------- Titular en pixel art (fuente 5x7 propia) ---------- */
(() => {
  const F = {};
  ['A:01110,10001,10001,11111,10001,10001,10001','D:11110,10001,10001,10001,10001,10001,11110',
   'E:11111,10000,10000,11110,10000,10000,11111','F:11111,10000,10000,11110,10000,10000,10000',
   'N:10001,11001,10101,10101,10011,10001,10001','O:01110,10001,10001,10001,10001,10001,01110',
   'P:11110,10001,10001,11110,10000,10000,10000','R:11110,10001,10001,11110,10100,10010,10001',
   'S:01111,10000,10000,01110,00001,00001,11110','T:11111,00100,00100,00100,00100,00100,00100',
   'U:10001,10001,10001,10001,10001,10001,01110','.:00,00,00,00,00,11,11']
    .forEach((s) => { F[s[0]] = s.slice(2).split(','); });

  document.querySelectorAll('.px[data-t]').forEach((el) => {
    let x = 0;
    let d = '';
    for (const ch of el.dataset.t) {
      const g = F[ch];
      if (!g) continue;
      g.forEach((row, y) => {
        for (let i = 0; i < row.length;) {
          if (row[i] !== '1') { i++; continue; }
          const s = i;
          while (row[i] === '1') i++;
          d += `M${x + s} ${y}h${i - s}v1h${s - i}z`;
        }
      });
      x += g[0].length + 1;
    }
    el.style.setProperty('--w', x);
    el.innerHTML = `<svg viewBox="0 0 ${x} 8" shape-rendering="crispEdges"><path d="${d}" fill="#000" fill-opacity=".4" transform="translate(.7 .7)"/><path d="${d}" fill="currentColor"/></svg>`;
  });
})();

(() => {
  const menuButton = document.querySelector('.hamb');
  const menu = document.querySelector('.links');
  if (!menuButton || !menu) return;

  const links = [...menu.querySelectorAll('a[href^="#"]')];
  const items = links
    .map((link) => ({ link, section: document.getElementById(link.hash.slice(1)) }))
    .filter((item) => item.section);

  /* ---------- Menú móvil ---------- */
  const setMenu = (open) => {
    menu.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };

  menuButton.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', (e) => { if (!e.target.closest('header')) setMenu(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 850) setMenu(false); });

  /* ---------- Opción activa (cursor) ---------- */
  let current = null;
  let locked = false;
  let lockTimer = 0;
  let ticking = false;

  const setCurrent = (link) => {
    if (link === current) return;
    current = link;
    links.forEach((a) => {
      if (a === link) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
  };

  const update = () => {
    ticking = false;
    if (locked || !items.length) return;
    const line = window.innerHeight * 0.4;
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    let active = null;
    for (const { link, section } of items) {
      if (section.getBoundingClientRect().top <= line) active = link;
    }
    setCurrent(atBottom ? items[items.length - 1].link : active);
  };

  const requestUpdate = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  const unlock = () => {
    clearTimeout(lockTimer);
    locked = false;
    requestUpdate();
  };

  // Al pulsar una opción, el cursor salta a ella al instante y no "parpadea"
  // por las secciones intermedias mientras dura el desplazamiento suave.
  links.forEach((link) => {
    link.addEventListener('click', () => {
      setMenu(false);
      setCurrent(link);
      locked = true;
      clearTimeout(lockTimer);
      lockTimer = setTimeout(unlock, 1200);
    });
  });

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('scrollend', unlock);
  window.addEventListener('resize', requestUpdate);
  update();
})();
