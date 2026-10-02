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
- **Círculo giratorio**: rosa de los vientos en SVG (`#rosa` en `index.html`) que gira lentamente detrás del caballero (`.halo` en `style.css`), con los colores de esta versión.
