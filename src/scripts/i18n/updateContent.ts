import i18next from "./i18n";

function updateContent() {
  document.querySelectorAll("[i18n-key]").forEach((element) => {
    const el = element as HTMLElement;
    const key = element.getAttribute("i18n-key");
    if (!key) return;
    el.innerText = i18next.t(key);
  });
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
