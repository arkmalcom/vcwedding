import "../styles/style.css";
import { changeLanguage, updateContent } from "./i18n/update-content";
import leafBorder from "../assets/leaf-border.jpg";
import watercolorBg from "../assets/watercolor-bg.jpg";

const app = document.querySelector<HTMLDivElement>("#app")!;

const navbar = document.createElement("nav");
navbar.className = "navbar";
navbar.innerHTML = `
  <div class="w-screen h-50 flex items-center bg-amber-950 fixed shadow-md z-10">
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
langButton.className = "lang-button";
langButton.innerHTML = `
  <div class="flex items-center justify-center bg-amber-950 text-amber-50 font-semibold font-serif p-2 rounded-lg shadow-md fixed bottom-4 left-4 z-10">
    <button onclick="changeLanguage()" id="lang-button" class="text-2xl"></span>
  </div>
`;

const landing = document.createElement("div");
landing.className = "landing bg-cover max-md:bg-left";
landing.style.backgroundImage = `url(${watercolorBg})`;
landing.innerHTML = `
  <div class="w-screen h-screen flex items-center justify-center">
    <img src="${leafBorder}" alt="watercolor leaves" class="absolute inset-0 object-cover w-full h-full z-1 opacity-75" />
    <div class="flex z-10 space-y-1 flex-col justify-center text-center text-amber-950 text-6xl font-logo font-semibold border-amber-950 h-screen md:w-1/2">
      <p>Malcom</p>
      <div class="flex items-center justify-center md:m-2 text-amber-800">
        <div class="border-t border-amber-800 md:w-1/4 w-32"></div>
        <span class="text-3xl font-serif mx-2 my-2">&</span>
        <div class="border-t border-amber-800 md:w-1/4 w-32"></div>
      </div>
      <p>Sheyla</p>
      <div class="md:py-24 py-8">
        <p id="save-the-date" class="text-amber-950 md:text-4xl text-base font-serif">Save the Date</p>
        <p id="date" class="text-amber-800 md:text-4xl text-base uppercase font-semibold font-serif">November 9, 2024</p>
      </div>
      <div class="md:py-12 py-4">
        <a href="#" class="text-amber-950 uppercase font-semibold font-stylized hover:text-amber-200 hover:border-amber-200 border-2 border-amber-950 p-2">RSVP</a>
      </div>
    </div>
  </div>
`;

app.appendChild(navbar);
app.appendChild(langButton);
app.appendChild(landing);

updateContent();

(window as any).changeLanguage = changeLanguage;
