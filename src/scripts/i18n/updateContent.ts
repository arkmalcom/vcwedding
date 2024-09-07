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
  const urlParams = new URLSearchParams(window.location.search);
  const currentLang = i18next.language;
  const queryLang = urlParams.get("hl");
  const newLang = queryLang || (currentLang === "es" ? "en" : "es");

  i18next.changeLanguage(newLang, () => {
    updateContent();
  });
  const langButton = document.getElementById("lang-button");
  if (!langButton) return;

  langButton.innerHTML =
    i18next.language === "en"
      ? '<span class="fi fi-do w-12 h-12"></span>'
      : '<span class="fi fi-us w-12 h-12"></span>';
}

export { changeLanguage, updateContent };
