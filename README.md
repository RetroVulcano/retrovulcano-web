# RetroVulcano

Web personal estática de RetroVulcano: gestión comercial, marketing digital, tecnología, historia y videojuegos clásicos.

Sitio: https://retrovulcano.es/

## Contenido

- `index.html`, `style.css`, `script.js`: la web (HTML, CSS y JavaScript sin dependencias).
- `favicon.svg`, `pixel-ship.png`, `orbeautomata.jpg`, `pulsayjuega.jpg`: recursos gráficos.
- `PRIVACIDAD.md`: recursos externos, cookies y rastreo (no hay).

## Créditos y licencias

- **`pixel-ship.png`**: ilustración del caballero generada con IA (ChatGPT).
- El resto de recursos gráficos y textos son propios del autor del sitio.

## Efectos añadidos

- **Círculo giratorio del caldero**: anillo SVG con los 7 objetos del caldero de Knight Lore en pixel art (bota, botella, bola de cristal, gema, grial, veneno y taza de té; 15×15 px cada uno, `#caldero` en `index.html`) que gira lentamente detrás del caballero (`.halo` en `style.css`, 70 s por vuelta).
- **Móvil y accesibilidad**: el giro del círculo respeta `prefers-reduced-motion` (muchos móviles lo activan con el ahorro de batería o "Quitar animaciones"). En pantallas ≤850 px se desactivan el ruido de fondo y el desenfoque del menú para ir más fluido.
