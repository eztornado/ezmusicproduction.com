# public/media — huecos de vídeo

El hero del sitio busca estos ficheros. Si no existen, se muestra el degradado
animado de reserva (no hay error ni hueco roto).

| Fichero | Uso | Formato recomendado |
| --- | --- | --- |
| `hero.mp4` | Vídeo de fondo del hero | MP4 (H.264), ~1920×1080, 8–15 s en bucle, **sin audio**, < 5 MB |
| `hero-poster.jpg` | Fotograma de portada mientras carga el vídeo | JPG 1920×1080 |

## Cómo cambiarlo

- **Mismo nombre**: deja tus ficheros aquí con el nombre de la tabla y listo.
- **Otro nombre/formato**: edita `HERO_VIDEO` y `HERO_POSTER` en
  `src/components/Hero.tsx`.

Consejo: un clip de la propia app (timeline, mixer, piano roll) en bucle corto
funciona mejor que un montaje publicitario. Deja la parte izquierda del
fotograma relativamente tranquila: ahí va el titular.
