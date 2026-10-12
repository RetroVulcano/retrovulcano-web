'use strict';

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
