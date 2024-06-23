import i18next from 'i18next';
import enTranslations from '../../localization/en.json';
import esTranslations from '../../localization/es.json';

i18next.init({
  lng: 'es',
  resources: {
    en: {
      translation: enTranslations
    },
    es: {
      translation: esTranslations
    }
  }
}, function(err, t) {
  if (err) console.error('i18next initialization failed:', err);
});

export default i18next;