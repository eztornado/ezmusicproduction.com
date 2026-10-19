# ezmusicproduction.com — web oficial de EZMusicProduction

Sitio de presentación de **EZMusicProduction**, el DAW de código abierto para
macOS: grabación, edición, mezcla y automatización en una sola ventana, con
instrumentos propios y librería de sonidos incluida.

SPA hecha con **React 19 + TypeScript + Vite + Mantine 8**, con contenido
multilingüe (ES / EN / JA) y lista para desplegar en **Coolify**.
Tema **rojo sobre negro**.

## Contenido del sitio

- **Hero** a pantalla completa con vídeo de fondo en bucle (ya incluido un clip
  de ejemplo; se sustituye dejando otro `hero.mp4`) y fondo animado de reserva.
- **Qué es** — tres ideas que resumen el producto.
- **Funciones propias**, cada una con su hueco de imagen:
  - Librería de Sonidos
  - EZInstruments (instrumentos MIDI propios, catálogo General MIDI)
  - EZSynth (sintetizador con osciladores, filtro y distorsiones LINES)
  - EZDrums (máquina de percusión)
  - EZOrquestra (sampler de orquesta, formato Alpine Project)
  - Piano Roll (cuantización no destructiva)
  - Apertura de proyectos de Cubase (`.cpr`, solo lectura)
- **Ventajas**, **FAQ** y bloque de **descarga**.

> Nota de posicionamiento: el producto **no** se presenta como derivado de otros
> DAW. Cubase solo se menciona al hablar de la **importación** de sus proyectos.

## Idiomas (ES / EN / JA)

El idioma se detecta en este orden: `?lang=xx` → preferencia guardada →
idioma del navegador → `<html lang>`. La elección se guarda en
`localStorage` (`ezmpp.lang`) y el selector está en la barra de navegación.

```
src/i18n/
├── index.ts            # configuración de i18next + lista de idiomas
└── locales/
    ├── es.json         # fuente de verdad (escríbelo primero)
    ├── en.json
    └── ja.json
```

- Ejecutar en un idioma concreto: `http://localhost:5173/?lang=ja`
- **Añadir textos**: crea la clave en los tres JSON. Todas las lenguas deben
  tener exactamente las mismas claves.
- **Añadir un idioma**: añade el JSON en `locales/`, regístralo en
  `src/i18n/index.ts` (`resources` y `LANGUAGES`) y listo.

Comprueba la paridad de claves con:

```bash
node -e '
const fs=require("fs");const d="src/i18n/locales";
const flat=(o,p="")=>Object.entries(o).flatMap(([k,v])=>v&&typeof v==="object"&&!Array.isArray(v)?flat(v,p?p+"."+k:k):[p?p+"."+k:k]);
const s=l=>new Set(flat(JSON.parse(fs.readFileSync(`${d}/${l}.json`,"utf8"))));
const ref=s("es");
for(const l of ["en","ja"]){const x=s(l);
  console.log(l,"missing:",[...ref].filter(k=>!x.has(k)),"extra:",[...x].filter(k=>!ref.has(k)));}
'
```

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera dist/
npm run preview    # sirve dist/ en local
npm run typecheck  # comprobación de tipos
```

## Dónde van los medios (los «huecos»)

Los componentes detectan si el fichero existe y, si no, pintan un marco con la
ruta que falta. No hace falta tocar código para añadir material:

| Qué | Dónde | Guía |
| --- | --- | --- |
| Vídeo del hero + portada | `public/media/hero.mp4`, `public/media/hero-poster.jpg` | [`public/media/README.md`](public/media/README.md) |
| Capturas de funciones y arquitectura | `public/images/features/*.png` | [`public/images/features/README.md`](public/images/features/README.md) |

Rutas concretas de cada hueco: `src/data/site.ts` (`FEATURES`, campo `image`) y
`HERO_VIDEO` en `src/components/Hero.tsx`.

El hero **ya trae un vídeo de ejemplo** (`public/media/hero.mp4`, 8 s en bucle);
las capturas de funciones siguen pendientes.

## Despliegue en Coolify

Incluye todo lo necesario para producción: **Dockerfile** multi-etapa
(node build → nginx) y `docker-compose.yaml`.

### Opción A — Dockerfile (recomendada)

1. En Coolify: **New Resource → Application → Public/Private Repository**.
2. Selecciona este repositorio y la rama.
3. **Build Pack: `Dockerfile`**.
4. **Port: `80`** (es el que expone el contenedor).
5. Añade tu dominio y deja que Coolify gestione el certificado TLS.

El healthcheck ya está definido (`GET /healthz` → `200 ok`), así que Coolify y
Docker lo vigilan solos.

### Opción B — Docker Compose

1. **New Resource → Docker Compose**.
2. Apunta al repositorio; Coolify leerá `docker-compose.yaml`.
3. Publica el servicio `web` en el puerto **80** y asigna el dominio.

### Opción C — build pack estático (Nixpacks)

Si prefieres no usar Docker: **Build Pack: `Nixpacks`**, comando de build
`npm run build`, **publish directory `dist`**. El `nginx.conf` no se usa en este
caso; asegúrate de que el servidor estático haga *fallback* a `index.html`.

### Probar en local

```bash
docker build -t ezmpp-web .
docker run --rm -p 8080:80 ezmpp-web     # http://localhost:8080
# o con compose:
docker compose up --build
```

### Qué hace la imagen

- **Etapa 1**: `npm ci` + `npm run build` → `dist/` (assets con hash).
- **Etapa 2**: nginx `alpine`, con `nginx.conf` propio:
  - *SPA fallback* (`try_files … /index.html`),
  - gzip,
  - caché de 1 año para `/assets/*` y 30 días para imágenes/vídeo,
  - `index.html` siempre revalidado,
  - cabeceras de seguridad y `server_tokens off`,
  - endpoint `/healthz`.

## Estructura

```text
src/
├── App.tsx                 # composición de las secciones (usa t())
├── main.tsx                # arranque + i18n + MantineProvider
├── theme.ts                # tema rojo sobre negro
├── styles/global.css       # hero, navbar, huecos, animaciones
├── i18n/                   # i18next + locales es/en/ja
├── data/site.ts            # configuración estática (enlaces, medios, anclas)
└── components/
    ├── Navbar.tsx          # barra fija + selector de idioma + menú móvil
    ├── Hero.tsx            # hero con vídeo de fondo en bucle
    ├── LanguageSwitcher.tsx# selector ES / EN / JA
    ├── SectionHeading.tsx  # encabezado de sección reutilizable
    ├── FeatureBlock.tsx    # bloque de función (texto + hueco de imagen)
    ├── MediaSlot.tsx       # hueco inteligente de imagen/vídeo
    └── Footer.tsx
```

Los textos viven en `src/i18n/locales/*.json`; los enlaces, rutas de medios y
anclas, en `src/data/site.ts`.
