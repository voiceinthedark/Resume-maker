// @ts-check

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpBackend from 'i18next-http-backend';

import enTranslations from "./locales/en/common.json"
import frTranslations from "./locales/fr/common.json"

console.log('english translation loaded:', enTranslations)
console.log('french translation loaded:', frTranslations)
// Create the resources object explicitly before passing it to init
const i18nResources = {
  en: {
    translation: enTranslations,
  },
  fr: {
    translation: frTranslations,
  },
};

console.log('i18nResources object before init:', i18nResources); // Log the full object
console.log('i18nResources.en.translation before init:', i18nResources.en.translation); // Log specific part



i18n
  // load translations using http (default)
  // .use(HttpBackend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    // Removed 'resources' from here, as it was not being processed correctly.
    // We will add resources via addResourceBundle in the callback instead.

    lng: 'en', // Set an initial language. LanguageDetector will override this if used.
    fallbackLng: 'en', // default language
    debug: false, // Set to false for production, keep true if you want to see i18next logs
    detection: { // If LanguageDetector is used, keep its configuration
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
      lookupQuerystring: 'lng',
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false, // react already escapes by default
    },
    ns: ['common'], // Default namespace
    defaultNS: 'common',
  }, (err, t) => {
    if (err) {
      return console.error('i18n initialization error:', err);
    }

    // Manually add resource bundles AFTER initialization is complete
    i18n.addResourceBundle('en', 'common', enTranslations, true, true);
    i18n.addResourceBundle('fr', 'common', frTranslations, true, true);

    // Optional: Log to confirm resources are added, then remove in production
    if (i18n.options.debug) {
      console.log('i18n initialized and resources added. Current language:', i18n.language);
      console.log('i18n has resources for "en" now:', i18n.hasResourceBundle('en', 'common'));
    }
  });

export default i18n;
