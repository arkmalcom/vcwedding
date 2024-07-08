import "../styles/style.css";
import { changeLanguage, updateContent } from "./i18n/update-content";
import landing from "./landing";
import moreInfo from "./info";
import rsvpModal from "./components/rsvp-modal";

const app = document.querySelector<HTMLDivElement>("#app")!;

const navbar = document.createElement("nav");
navbar.className = "navbar";
navbar.innerHTML = `
  <div class="w-screen h-50 flex items-center bg-amber-950 absolute border-b-2 shadow-md border-amber-800 z-20">
    <div class="flex space-x-4 p-2 lg:px-8 w-screen justify-between">
      <div class="flex items-center space-x-4">
        <div class="text-amber-50 text-2xl font-semibold font-logo text-2xl">M&S</div>
      </div>
      <ul class="hidden lg:flex space-x-4">
        <li><a i18n-key="nav.ourStory" href="#" class="text-amber-50 uppercase font-semibold font-serif hover:text-amber-200"></a></li>
        <li><a i18n-key="nav.location" href="#" class="text-amber-50 uppercase font-semibold font-serif hover:text-amber-200"></a></li>
        <li><a href="#" class="rsvp text-amber-200 uppercase font-semibold font-serif hover:text-amber-400 hover:border-amber-400 border-2 border-amber-200 p-2">RSVP</a></li>
      </ul>
      <button id="menu-toggle" class="lg:hidden text-amber-50 focus:outline-none">
        <i class="fas fa-bars text-amber-50 text-3xl"></i>
      </button>
    </div>
  </div>
  <div id="mobile-menu" class="hidden flex-col space-y-1 items-center border-b-2 border-amber-700 bg-amber-950 w-full text-center absolute top-0 left-0 pt-12 pb-2 lg:hidden">
    <a i18n-key="nav.ourStory" href="#" class="block text-amber-50 uppercase font-semibold font-serif hover:text-amber-200 py-2"></a>
    <a i18n-key="nav.location" href="#" class="block text-amber-50 uppercase font-semibold font-serif hover:text-amber-200 py-2"></a>
    <a href="#" class="rsvp block text-amber-200 uppercase font-semibold font-serif hover:text-amber-400 hover:border-amber-400 border-2 border-amber-200 p-2 mt-2">RSVP</a>
  </div>
`;

const langButton = document.createElement("button");
langButton.className =
  "lang-button flex items-center justify-center p-1 rounded-lg shadow-md fixed bottom-4 left-4 w-10 h-10 z-30";
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

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  let menuOpen = false;

  if (!menuToggle || !mobileMenu) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      mobileMenu.classList.remove("hidden");
      menuToggle.innerHTML = '<i class="fas fa-times text-3xl"></i>';
      mobileMenu.classList.add("flex", "animate-slide-in");
    } else {
      mobileMenu.classList.add("animate-slide-out");
      menuToggle.innerHTML = '<i class="fas fa-bars text-3xl"></i>';
      mobileMenu.classList.remove("flex", "animate-slide-in");
      setTimeout(() => {
        mobileMenu.classList.remove("animate-slide-out");
        mobileMenu.classList.add("hidden");
      }, 300);
    }
  });
});

const rsvpButtonClass = document.querySelectorAll(".rsvp");
if (rsvpButtonClass) {
  rsvpButtonClass.forEach((button) => {
    button.addEventListener("click", () => {
      app.appendChild(rsvpModal);
      updateContent();
    });
  });
}

const langButtonElement = document.getElementById("lang-button");
langButtonElement!.addEventListener("click", () => {
  langButton.disabled = true;
  changeLanguage();

  setTimeout(() => {
    langButton.disabled = false;
  }, 500);
});
