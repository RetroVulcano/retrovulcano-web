# RetroVulcano

Web personal estática de RetroVulcano: gestión comercial, marketing digital, tecnología, historia y videojuegos clásicos.

Sitio: https://retrovulcano.es/

## Contenido

- `index.html`, `style.css`, `script.js`: la web (HTML, CSS y JavaScript sin dependencias).
- `pixel-ship.webp`, `orbeautomata.webp`, `pulsayjuega.webp`: recursos gráficos (WebP; el caballero va sin pérdida para conservar el pixel art).
- `favicon.ico`, `favicon-64.png`, `favicon-64-oscuro.png`, `apple-touch-icon.png`: favicon del casco de RetroVulcano. La versión clara (casco oscuro) es la predeterminada y la oscura (casco blanco) se usa cuando el navegador está en modo oscuro; el icono de Apple lleva fondo sólido.
- `logo.webp`: casco de RetroVulcano de la barra superior.
- `og-image.png`: imagen que se muestra al compartir la web en redes (512×512).
- `PRIVACIDAD.md`: recursos externos, cookies y rastreo (no hay).

## Diseño

- **Paleta**: azul índigo de fondo con cuadrícula de puntos y cuatro colores de acento, los de los universos (cian, ámbar, coral y violeta; variables `--c1`…`--c4`).
- **Titular en pixel art**: "Pasado. Presente. Futuro." se dibuja con una fuente 5×7 propia (`script.js`) y aparece "tecleado" al cargar. Sin JavaScript se muestra como texto normal.
- **Pantalla CRT**: marco con barra de ventana y franja de colores tipo ZX Spectrum; dentro, el caballero con el círculo giratorio con los 5 enemigos de Atic Atac (Diablo, Drácula, Monstruo de Frankenstein, Jorobado y Momia), dibujados en pixel art y con los colores de la web. Van en el SVG de `.halo` en `index.html`: el círculo da una vuelta cada 70 s y los enemigos giran en sentido contrario para mantenerse de pie.
- **Tarjetas de proyectos**: la imagen va detrás del texto en blanco y negro, como una pantalla de TV (líneas de barrido, viñeta, parpadeo ocasional y etiqueta "CH 01/02"). Con `prefers-reduced-motion` no parpadea.
- **Identidad**: el favicon sigue el manual de identidad visual de RetroVulcano (casco con penacho en píxeles rojo y base azul).
- **Menú**: cada opción usa el color de su universo y la sección visible se marca con `aria-current` y un cursor de terminal parpadeante.
- **Accesibilidad y móvil**: enlace "Saltar al contenido", foco visible y `prefers-reduced-motion` respetado (sin giro, sin tecleado y cursor fijo).

## Créditos y licencias

- **`pixel-ship.webp`**: ilustración del caballero generada con IA (ChatGPT).
- El resto de recursos gráficos y textos son propios del autor del sitio.
