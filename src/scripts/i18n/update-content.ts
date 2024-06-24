import i18next from "./i18n";
import enTranslations from "../../localization/en.json";

function updateContent() {
  for (const key in enTranslations) {
    if (enTranslations.hasOwnProperty(key)) {
      const element = document.getElementById(key);
      if (!element) continue;
      element.innerText = i18next.t(key);
    }
  }
}

function changeLanguage() {
  const currentLanguage = i18next.language;
  const newLanguage = currentLanguage === "en" ? "es" : "en";
  const langButton = document.getElementById("lang-button");
  i18next.changeLanguage(newLanguage, () => {
    updateContent();
  });
  if (!langButton) return;

  langButton.innerHTML =
    i18next.language === "en"
      ? '<span class="fi fi-do w-12 h-12"></span>'
      : '<span class="fi fi-us w-12 h-12"></span>';
}

export { changeLanguage, updateContent };
