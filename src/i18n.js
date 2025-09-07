import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  // load translations using http (default)
  .use(HttpBackend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    fallbackLng: 'en', // default language
    debug: true, // Set to false in production
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false, // react already escapes by default
    },
    // Specify where to load your translation files
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to your translation files
    },
    ns: ['common'], // Default namespace
    defaultNS: 'common',
  });

export default i18n;
