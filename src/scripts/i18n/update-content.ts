import i18next from './i18n';

function updateContent() {
  document.getElementById('our-story').innerText = i18next.t('our-story');
  document.getElementById('location').innerText = i18next.t('location');
  document.getElementById('rsvp').innerText = i18next.t('rsvp');
  document.getElementById('lang-button').innerText = i18next.t('lang-button');
}

function changeLanguage() {
    const currentLanguage = i18next.language;
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';

    i18next.changeLanguage(newLanguage, () => {
        updateContent();
    });
}

export { changeLanguage, updateContent };