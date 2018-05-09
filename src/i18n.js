import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en-US',
    debug: true, // !!

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    },

    backend: {
      loadPath: '/locales/{{lng}}.json'
    }
  });

export default i18n;
