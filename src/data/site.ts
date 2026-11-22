import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../i18n';

/**
 * Configuración estática del sitio: lo que NO se traduce (producto, enlaces,
 * rutas de medios, anclas). Todo el texto vive en `src/i18n/locales/*.json`.
 */

export const site = {
  name: 'EZMusicProduction',
  repo: 'https://github.com/eztornado/EZMusicProduction',
  /**
   * Descarga: página de releases del DAW (macOS, Linux y Windows).
   * `releases/latest` no resuelve mientras la versión esté marcada como
   * prerelease, así que enlazamos al listado completo.
   */
  downloadUrl: 'https://github.com/eztornado/EZMusicProduction/releases',
  /** App de control remoto Android (EZMusicProductionRemote). */
  remoteRepo: 'https://github.com/eztornado/EZMusicProductionRemote',
  remoteDownloadUrl: 'https://github.com/eztornado/EZMusicProductionRemote/releases',
};

/** Navegación: `key` es la clave de traducción (`nav.*`) y `href` el ancla. */
export const nav = [
  { key: 'nav.whatIs', href: '#about' },
  { key: 'nav.features', href: '#features' },
  { key: 'nav.instruments', href: '#instruments' },
  { key: 'nav.effects', href: '#effects' },
  { key: 'nav.ai', href: '#ai' },
  { key: 'nav.remote', href: '#remote' },
  { key: 'nav.pianoRoll', href: '#piano-roll' },
  { key: 'nav.architecture', href: '#architecture' },
] as const;

/** Los números del hero. El valor es fijo; la etiqueta se traduce. */
export const heroStats = [
  { value: '21.590', key: 'hero.stats.sounds' },
  { value: '4', key: 'hero.stats.instruments' },
  { value: '3', key: 'hero.stats.platforms' },
  { value: '100 %', key: 'hero.stats.open' },
] as const;

export type FeatureMeta = {
  /** Ancla de la sección (no se traduce). */
  id: string;
  /** Clave dentro de `features.*` en los JSON de traducción. */
  i18nKey: string;
  /** Ruta pública de la captura (hueco si no existe). */
  image: string;
  /** Proporción recomendada del hueco. */
  ratio: string;
  /** Texto de ayuda del hueco: qué imagen hay que colocar (para el autor). */
  hint: string;
  /** Captura vertical (móvil): hueco 3/4 acotado y centrado en la tarjeta. */
  portrait?: boolean;
  highlighted?: boolean;
};

export const FEATURES: Record<string, FeatureMeta> = {
  libreria: {
    id: 'library',
    i18nKey: 'libreria',
    image: '/images/features/libreria.png',
    ratio: '16 / 10',
    hint: 'Captura de la Library con filas, badges de tempo/tonalidad y botón de preview',
    highlighted: true,
  },
  ezinstruments: {
    id: 'ezinstruments',
    i18nKey: 'ezinstruments',
    image: '/images/features/ezinstruments.png',
    ratio: '16 / 10',
    hint: 'Selector de los 128 programas GM y el kit de percusión',
  },
  ezsynth: {
    id: 'ezsynth',
    i18nKey: 'ezsynth',
    image: '/images/features/ezsynth.png',
    ratio: '16 / 10',
    hint: 'Panel del EZSynth con osciladores, filtro y las zonas LINES sobre el roll',
  },
  ezdrums: {
    id: 'ezdrums',
    i18nKey: 'ezdrums',
    image: '/images/features/ezdrums.png',
    ratio: '16 / 10',
    hint: 'Pad de percusión con kits, patrones y control de compás',
  },
  ezorquestra: {
    id: 'ezorquestra',
    i18nKey: 'ezorquestra',
    image: '/images/features/ezorquestra.png',
    ratio: '16 / 10',
    hint: 'Interfaz del sampler con familias de orquesta y selección de articulación',
  },
  effects: {
    id: 'effects',
    i18nKey: 'effects',
    image: '/images/features/effects.png',
    ratio: '16 / 10',
    hint: 'Panel de efectos incluidos: EZQ4, EZCompresor, EZLimitador, EZArpegiador',
  },
  ai: {
    id: 'ai',
    i18nKey: 'ai',
    image: '/images/features/ai.png',
    ratio: '16 / 10',
    hint: 'Herramientas IA: asistente de mezcla, arreglista de canciones, generación musical',
  },
  remote: {
    id: 'remote',
    i18nKey: 'remote',
    image: '/images/features/remote.png',
    ratio: '3 / 4',
    hint: 'App Android controlando el transporte, timeline y mezclador desde el móvil',
    portrait: true,
  },
  ezq4: {
    id: 'ezq4',
    i18nKey: 'ezq4',
    image: '/images/features/ezq4.png',
    ratio: '16 / 10',
    hint: 'Panel del EQ EZQ4 con las 8 bandas editables (tipo, frecuencia, ganancia y Q)',
  },
  ezcompresor: {
    id: 'ezcompresor',
    i18nKey: 'ezcompresor',
    image: '/images/features/ezcompresor.png',
    ratio: '16 / 10',
    hint: 'Panel del compresor con knee, attack, release y mezcla paralela',
  },
  ezlimitador: {
    id: 'ezlimitador',
    i18nKey: 'ezlimitador',
    image: '/images/features/ezlimitador.png',
    ratio: '16 / 10',
    hint: 'Panel del limitador brick-wall con look-ahead y techo de seguridad',
  },
  ezarpegiador: {
    id: 'ezarpegiador',
    i18nKey: 'ezarpegiador',
    image: '/images/features/ezarpegiador.png',
    ratio: '16 / 10',
    hint: 'Panel del arpegiador MIDI-FX con patrones y sincronía al transporte',
  },
  pianoRoll: {
    id: 'piano-roll',
    i18nKey: 'pianoRoll',
    image: '/images/features/piano-roll.png',
    ratio: '16 / 10',
    hint: 'Editor de notas con el panel de cuantización y la lane de velocity',
    highlighted: true,
  },
};

/** Orden de los instrumentos EZ en la rejilla de tarjetas. */
export const INSTRUMENT_KEYS = [
  'ezinstruments',
  'ezsynth',
  'ezdrums',
  'ezorquestra',
] as const satisfies readonly (keyof typeof FEATURES)[];

/** Orden de los efectos EZ en la rejilla de tarjetas. */
export const EFFECT_KEYS = [
  'ezq4',
  'ezcompresor',
  'ezlimitador',
  'ezarpegiador',
] as const satisfies readonly (keyof typeof FEATURES)[];

/** Hueco del diagrama de arquitectura. */
export const architectureImage = {
  image: '/images/features/arquitectura.png',
  ratio: '4 / 5',
  hint: 'Diagrama de bloques: Flutter (UI) → puente FFI → motor C++/JUCE',
};

/**
 * Normaliza un idioma a uno soportado (por ejemplo "es-ES" → "es").
 * Útil para `<html lang>` y para el selector.
 */
export function normalizeLanguage(lng: string | undefined): string {
  const base = (lng ?? DEFAULT_LANGUAGE).split('-')[0];
  return (SUPPORTED_LANGUAGES as string[]).includes(base) ? base : DEFAULT_LANGUAGE;
}
