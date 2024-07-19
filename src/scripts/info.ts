import CountdownTimer from "./components/countdownTimer";
import watercolorBg from "../assets/watercolor-bg.jpg";

const moreInfo = document.createElement("section");
moreInfo.className = "section relative w-screen h-screen bg-orange-50";
moreInfo.innerHTML = `
  <div class="flex w-screen h-screen flex-col items-center justify-center border-b-4 border-t-4 border-amber-950">\
    <img src="${watercolorBg}" alt="watercolor background" class="absolute object-cover object-right top-0 w-screen h-screen opacity-25" />
    <div id="countdown-section" class="flex flex-col justify-center items-center p-4 font-serif text-3xl text-amber-950 border-b-4 border-amber-950 bg-orange-100 z-20 lg:text-4xl w-screen">
      <h1 i18n-key="countdownTitle" class="text-amber-950 font-bold font-logo pb-2"></h1>
      <div class="flex flex-row justify-center items-center space-x-6 lg:space-x-4 mb-4">
        <div class="border-l-2 border-r-2 border-amber-950 py-2 lg:py-3 lg:w-20 w-16 font-semibold text-center">
        <p id="num-days" class="text-amber-950">0</p>
        <p i18n-key="days" class="text-base lg:text-xl py-2">Days</p>
        </div>
        <div class="border-l-2 border-r-2 border-amber-950 p-2 lg:py-3 lg:w-20 w-16 font-semibold text-center">
        <p id="num-hours" class="text-amber-950">0</p>
        <p i18n-key="hours" class="text-base lg:text-xl py-2">Hours</p>
        </div>
        <div class="border-l-2 border-r-2 border-amber-950 p-2 lg:py-3 lg:w-20 w-16 font-semibold text-center">
        <p id="num-minutes" class="text-amber-950">0</p>
        <p i18n-key="minutes" class="text-base lg:text-xl py-2">Minutes</p>
        </div>
        <div class="border-l-2 border-r-2 border-amber-950 p-2 lg:py-3 lg:w-20 w-16 font-semibold text-center">
        <p id="num-seconds" class="text-amber-950">0</p>
        <p i18n-key="seconds" class="text-base lg:text-xl py-2">Seconds</p>
        </div>
      </div>
      <a href="https://www.google.com/maps/dir/?api=1&destination=18.475471,-69.886072" target="_blank" rel="noopener noreferrer">
        <button i18n-key="locationButton" class="py-4 rounded-md border-4 shadow-md px-2 border-amber-800 text-amber-950 uppercase font-black font-serif hover:text-amber-800"></button>
      </a>
    </div>
      <div class="flex z-10 lg:space-y-8 space-y-4 flex-col h-screen items-center justify-center">
        <div class="flex flex-row">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button i18n-key="dressCode" class="fade-button opacity-0 py-1 h-20 w-64 rounded-md border-4 shadow-md px-2 border-amber-800 bg-amber-100 text-amber-950 uppercase font-black font-serif hover:text-amber-800 text-lg"></button>
          </a>
        </div>
        <div class="flex flex-row">
          <a href="https://listaderegalos.casacuesta.com/Event/SheylaLoraine-and-Malcom?utm_source=share" target="_blank" rel="noopener noreferrer">
            <button i18n-key="giftListBachelorette" class="fade-button opacity-0 py-1 h-20 w-64 rounded-md border-4 shadow-md px-2 border-amber-800 bg-amber-100 text-amber-950 uppercase font-black font-serif hover:text-amber-800 text-lg"></button>
          </a>
        </div>
        <div class="flex flex-row">
          <a href="https://listaderegalos.casacuesta.com/Event/Malcom-SheylaLoraine" target="_blank" rel="noopener noreferrer">
            <button i18n-key="giftListWedding" class="fade-button opacity-0 py-1 h-20 w-64 rounded-md border-4 shadow-md px-2 border-amber-800 bg-amber-100 text-amber-950 uppercase font-black font-serif hover:text-amber-800 text-lg"></button>
          </a>
        </div>
        <div class="flex flex-row">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button i18n-key="recommendSong" class="fade-button opacity-0 py-1 h-20 w-64 rounded-md border-4 shadow-md px-2 border-amber-800 bg-amber-100 text-amber-950 uppercase font-black font-serif hover:text-amber-800 text-lg"></button>
          </a>
        </div>
      </div>
  </div>
`;

const numDays = moreInfo.querySelector("#num-days")!;
const numHours = moreInfo.querySelector("#num-hours")!;
const numMinutes = moreInfo.querySelector("#num-minutes")!;
const numSeconds = moreInfo.querySelector("#num-seconds")!;

const countdown = new CountdownTimer("2024-11-09T17:00:00");

countdown.start((days, hours, minutes, seconds) => {
  numDays.textContent = `${days}`;
  numHours.textContent = `${hours}`;
  numMinutes.textContent = `${minutes}`;
  numSeconds.textContent = `${seconds}`;
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".fade-button");
  const icons = document.querySelectorAll(".fade-icon");

  const fadeInOnScroll = () => {
    buttons.forEach((button) => {
      const rect = button.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight * 0.85 &&
        rect.bottom >= window.innerHeight * 0.25
      ) {
        button.classList.add("fade-in-from-left");
        button.classList.remove("opacity-0");
      }
    });
    icons.forEach((icon) => {
      const rect = icon.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight * 0.85 &&
        rect.bottom >= window.innerHeight * 0.25
      ) {
        icon.classList.add("fade-in-from-right");
        icon.classList.remove("opacity-0");
      }
    });
  };

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll();
});

export default moreInfo;
