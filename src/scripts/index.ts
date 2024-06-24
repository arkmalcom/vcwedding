import "../styles/style.css";
import { changeLanguage, updateContent } from "./i18n/update-content";
import landing from "./landing";
import moreInfo from "./info";

const app = document.querySelector<HTMLDivElement>("#app")!;

const navbar = document.createElement("nav");
navbar.className = "navbar";
navbar.innerHTML = `
  <div class="w-screen h-50 flex items-center bg-amber-950 fixed border-b-2 shadow-md border-amber-800 z-20">
    <div class="flex space-x-4 p-2 lg:px-8 w-screen justify-between">
      <div class="flex items-center space-x-4">
        <div class="text-amber-50 text-2xl font-semibold font-logo text-2xl">M&S</div>
      </div>
      <ul class="flex space-x-4">
        <li><a id="our-story" href="#" class="text-amber-50 uppercase font-semibold font-serif hover:text-amber-200"></a></li>
        <li><a id="location" href="#" class="text-amber-50 uppercase font-semibold font-serif hover:text-amber-200"></a></li>
        <li><a href="#" class="text-amber-200 uppercase font-semibold font-serif hover:text-amber-400 hover:border-amber-400 border-2 border-amber-200 p-2">RSVP</a></li>
    </div>
  </div>
`;

const langButton = document.createElement("button");
langButton.className =
  "lang-button flex items-center justify-center p-1 rounded-lg shadow-md fixed bottom-4 left-4 w-10 h-10 z-20";
langButton.id = "lang-button";
langButton.innerHTML = `
  <span class="fi fi-us w-12 h-12"></span>
`;

app.appendChild(navbar);
app.appendChild(langButton);
app.appendChild(landing);
app.appendChild(moreInfo);

updateContent();

(window as any).changeLanguage = changeLanguage;

const langButtonElement = document.getElementById("lang-button");
langButtonElement!.addEventListener("click", () => {
  langButton.disabled = true;
  changeLanguage();

  setTimeout(() => {
    langButton.disabled = false;
  }, 500);
});
