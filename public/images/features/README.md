# public/images/features — huecos de imagen

Cada sección de funciones intenta cargar una captura. Si el fichero no existe,
la web muestra un marco con la ruta exacta que falta, así que basta con dejar el
PNG con el nombre correcto para que aparezca.

| Fichero | Sección | Qué capturar | Proporción |
| --- | --- | --- | --- |
| `libreria.png` | Librería de Sonidos | Library con filas, badges de tempo/tonalidad y el botón ▶ de preview | 16 / 10 |
| `ezinstruments.png` | EZInstruments | Selector de los 128 programas GM + kit de percusión | 16 / 10 |
| `ezsynth.png` | EZSynth | Panel del sinte (osciladores, filtro) y/o las zonas LINES sobre el roll | 16 / 10 |
| `ezdrums.png` | EZDrums | Pad de percusión con kits, patrones y compás | 16 / 10 |
| `ezorquestra.png` | EZOrquestra | Sampler con familias de orquesta y articulaciones | 16 / 10 |
| `piano-roll.png` | Piano Roll | Editor de notas + panel de cuantización + lane de velocity | 16 / 10 |
| `cubase-import.png` | Proyectos de Cubase | Diálogo de importación y proyecto recreado en la timeline | 16 / 10 |
| `arquitectura.png` | Arquitectura | Diagrama Flutter → FFI → motor C++/JUCE | 4 / 5 (vertical) |

Notas de calidad:

- Tema oscuro cálido, como la app. Fondo `#1c1712` o similar.
- Ventana completa, sin barra de menús del sistema ni fondo de escritorio.
- 2× (Retina) para que se vea nítido: p. ej. 2560×1600 para un 16/10.
- PNG o WebP. Optimiza por debajo de ~400 KB cada una.
