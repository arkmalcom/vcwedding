import "../styles/style.css";
import { changeLanguage, updateContent } from "./i18n/update-content";
import landing from "./landing";

const app = document.querySelector<HTMLDivElement>("#app")!;

const navbar = document.createElement("nav");
navbar.className = "navbar";
navbar.innerHTML = `
  <div class="w-screen h-50 flex items-center bg-amber-950 fixed border-b-2 border-amber-800 shadow-md z-20">
    <div class="flex space-x-4 p-2 w-full justify-between">
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
langButton.className = "lang-button flex items-center justify-center bg-amber-950 text-amber-50 font-semibold font-serif p-2 rounded-lg shadow-md fixed bottom-4 left-4 z-20";
langButton.id = "lang-button";

const ourStory = document.createElement("section");
ourStory.className = "section w-screen h-screen bg-amber-950 bg-orange-100";
ourStory.innerHTML = `
  <div class="flex items-center justify-center border-b-4 border-t-4 border-amber-950">
    <div class="flex z-10 space-y-1 flex-col justify-center text-center text-amber-50 text-6xl font-logo font-semibold border-amber-950 h-screen md:w-1/2">
      <p id="our-story-title"></p>
      <div class="md:py-24 py-8 flex md:space-y-4 space-y-2 flex-col">
        <p class="text-amber-950">No se permiten niños</p>
        <p id="our-story-text"></p>
      </div>
    </div>
  </div>
`;

app.appendChild(navbar);
app.appendChild(langButton);
app.appendChild(landing);
app.appendChild(ourStory);

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
