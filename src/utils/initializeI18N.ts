import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as locales from 'locales';

export const initializeI18N = () => {
  i18n.use(initReactI18next).init({
    resources: locales,
    lng: 'en_US',
    fallbackLng: 'en_US',
    interpolation: {
      escapeValue: false,
    },
  });
};
