// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json'; // English translations
import hi from './locales/hi.json'; // Hindi translations
import mr from './locales/mr.json'; // Marathi translations

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      mr: { translation: mr },
    },
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
