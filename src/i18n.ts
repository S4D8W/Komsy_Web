import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'; 

import en from '../src/Languages/en.json';
import pl from '../src/Languages/pl.json';



const resources = {
  en: {
    translation: en,
  },
  pl: {
    translation: pl,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pl',
  fallbackLng: 'pl',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;