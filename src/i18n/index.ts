import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './locales/es.json';
import en from './locales/en.json';
import ja from './locales/ja.json';

/** Idiomas soportados, en el orden en que se muestran en el selector. */
export const LANGUAGES = [
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ja', label: '日本語', short: 'JA' },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]['code'];

export const SUPPORTED_LANGUAGES = LANGUAGES.map((l) => l.code) as LanguageCode[];

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      ja: { translation: ja },
    },
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    // la detección resuelve "es-ES" → "es"
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    interpolation: {
      // React ya escapa por nosotros
      escapeValue: false,
    },
    detection: {
      // 1) ?lang=ja  2) preferencia guardada  3) idioma del navegador  4) <html lang>
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'ezmpp.lang',
      caches: ['localStorage'],
    },
  });

export default i18n;
