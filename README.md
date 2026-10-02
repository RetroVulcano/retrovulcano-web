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

- **Dragón pixel art**: sprite de 24x16 píxeles más 16 columnas de fuego, dibujado en código (`script.js`, canvas `#dragon`). Cruza la cabecera y cada 5 s escupe fuego. Con `prefers-reduced-motion` se queda quieto.
- **Círculo zodiacal giratorio**: anillo SVG con los 12 signos del zodiaco en pixel art (13×13 px cada uno, `#zodiaco` en `index.html`) que gira lentamente detrás del caballero (`.halo` en `style.css`, 70 s por vuelta).
- **Móvil y accesibilidad**: la animación respeta `prefers-reduced-motion` (muchos móviles lo activan con el ahorro de batería o "Quitar animaciones"). Para forzarla al probar, abre la web con `?anim=1`. En pantallas ≤850 px el dragón va a ~30 fps, se pausa cuando la cabecera no está visible y se desactivan el ruido de fondo y el desenfoque del menú.
