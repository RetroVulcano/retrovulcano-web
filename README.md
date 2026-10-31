# RetroVulcano

Web personal estática de RetroVulcano: gestión comercial, marketing digital, tecnología, historia y videojuegos clásicos.

Sitio: https://retrovulcano.es/

## Contenido

- `index.html`, `style.css`, `script.js`: la web (HTML, CSS y JavaScript sin dependencias).
- `favicon.svg`, `pixel-ship.png`, `orbeautomata.jpg`, `pulsayjuega.jpg`: recursos gráficos.
- `PRIVACIDAD.md`: recursos externos, cookies y rastreo (no hay).

## Diseño

- **Paleta**: azul índigo de fondo con cuadrícula de puntos y cuatro colores de acento, los de los universos (cian, ámbar, coral y violeta; variables `--c1`…`--c4`).
- **Titular en pixel art**: "Pasado. Presente. Futuro." se dibuja con una fuente 5×7 propia (`script.js`) y aparece "tecleado" al cargar. Sin JavaScript se muestra como texto normal.
- **Pantalla CRT**: marco con barra de ventana y franja de colores tipo ZX Spectrum; dentro, el caballero con el círculo giratorio de los 7 objetos del caldero de Knight Lore (`#caldero` en `index.html`, 70 s por vuelta).
- **Menú**: cada opción usa el color de su universo y la sección visible se marca con `aria-current` y un cursor de terminal parpadeante.
- **Accesibilidad y móvil**: enlace "Saltar al contenido", foco visible y `prefers-reduced-motion` respetado (sin giro, sin tecleado y cursor fijo).

## Créditos y licencias

- **`pixel-ship.png`**: ilustración del caballero generada con IA (ChatGPT).
- El resto de recursos gráficos y textos son propios del autor del sitio.
