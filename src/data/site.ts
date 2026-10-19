import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../i18n';

/**
 * Configuración estática del sitio: lo que NO se traduce (producto, enlaces,
 * rutas de medios, anclas). Todo el texto vive en `src/i18n/locales/*.json`.
 */

export const site = {
  name: 'EZMusicProduction',
  repo: 'https://github.com/ivanpastorsimarro/EZMusicProduction',
  /** Enlace a la última release descargable. HUECO: apunta al DMG/ZIP real. */
  downloadUrl: 'https://github.com/ivanpastorsimarro/EZMusicProduction/releases/latest',
};

/** Navegación: `key` es la clave de traducción (`nav.*`) y `href` el ancla. */
export const nav = [
  { key: 'nav.whatIs', href: '#que-es' },
  { key: 'nav.features', href: '#funciones' },
  { key: 'nav.instruments', href: '#instrumentos' },
  { key: 'nav.pianoRoll', href: '#piano-roll' },
  { key: 'nav.cubase', href: '#cubase' },
  { key: 'nav.architecture', href: '#arquitectura' },
] as const;

/** Los cuatro números del hero. El valor es fijo; la etiqueta se traduce. */
export const heroStats = [
  { value: '21.590', key: 'hero.stats.sounds' },
  { value: '4', key: 'hero.stats.instruments' },
  { value: '128', key: 'hero.stats.gm' },
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
  highlighted?: boolean;
};

export const FEATURES: Record<string, FeatureMeta> = {
  libreria: {
    id: 'libreria',
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
  pianoRoll: {
    id: 'piano-roll',
    i18nKey: 'pianoRoll',
    image: '/images/features/piano-roll.png',
    ratio: '16 / 10',
    hint: 'Editor de notas con el panel de cuantización y la lane de velocity',
    highlighted: true,
  },
  cubase: {
    id: 'cubase',
    i18nKey: 'cubase',
    image: '/images/features/cubase-import.png',
    ratio: '16 / 10',
    hint: 'Diálogo de importación y proyecto de Cubase recreado en la timeline',
  },
};

/** Orden de los instrumentos EZ en la rejilla de tarjetas. */
export const INSTRUMENT_KEYS = ['ezinstruments', 'ezsynth', 'ezdrums', 'ezorquestra'] as const;

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
