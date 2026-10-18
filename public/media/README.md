# public/media — vídeo del hero

El hero busca estos ficheros y los usa como **fondo a pantalla completa**
(el vídeo se reproduce en bucle, silenciado y en `autoplay`; no hay botón que
lo abra).

| Fichero | Uso | Formato |
| --- | --- | --- |
| `hero.mp4` | Vídeo de fondo del hero | MP4 (H.264), 1600×900, **8 s en bucle**, sin audio, ~0,85 MB |
| `hero-poster.jpg` | Fotograma de portada mientras carga | JPG 1600×900 |

## Estado actual

Ya hay **un vídeo de ejemplo incluido**: un fondo abstracto en negro con
resplandores rojos que derivan lentamente y una onda tipo audio. Está generado
para que el hero no salga vacío y para que el bucle encaje sin salto.

## Cómo cambiarlo

- **Mismo nombre**: sustituye `hero.mp4` y `hero-poster.jpg` por tus ficheros.
- **Otro nombre/formato**: edita `HERO_VIDEO` y `HERO_POSTER` en
  `src/components/Hero.tsx`.

Consejos para el vídeo definitivo:

- Un clip **corto en bucle** (6–12 s) y **sin audio**: se reproduce en silencio.
- Deja la **mitad izquierda** tranquila y oscura: ahí van el titular y los botones
  (además hay un degradado que oscurece esa zona).
- Comprime a ~2 Mbps. Un MP4 de 1080p de 10 s puede quedar por debajo de 3 MB.
- Si el vídeo falla o se elimina, se muestra el fondo animado en CSS de reserva
  (`.ez-hero__fallback`), así que la página nunca se queda en blanco.
