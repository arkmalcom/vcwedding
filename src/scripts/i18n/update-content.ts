import i18next from "./i18n";
import enTranslations from "../../localization/en.json";

function updateContent() {
  for (const key in enTranslations) {
    if (enTranslations.hasOwnProperty(key)) {
      const element = enTranslations[key];
      document.getElementById(key).innerText = i18next.t(key);
    }
  }
}

function changeLanguage() {
  const currentLanguage = i18next.language;
  const newLanguage = currentLanguage === "en" ? "es" : "en";

  i18next.changeLanguage(newLanguage, () => {
    updateContent();
  });
}

export { changeLanguage, updateContent };
