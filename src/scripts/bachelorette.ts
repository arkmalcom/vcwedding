import CountdownTimer from "./components/countdownTimer";
import watercolorBg from "../assets/watercolor-bg.jpg";

const bachelorette = document.createElement("section");
bachelorette.className = "section relative w-screen h-full";
bachelorette.id = "bachelorette";
bachelorette.innerHTML = `
  <div class="flex w-screen h-full flex-col items-center justify-center text-center border-b-4 border-amber-950">
    <img src="${watercolorBg}" alt="watercolor background" class="absolute object-cover object-right top-0 w-screen h-full opacity-25" />
      <div class="flex flex-col space-y-1 pt-4 w-screen justify-center items-center">
        <div class="border-t border-2 border-amber-900 lg:w-96 w-2/3"></div>
        <p i18n-key="bachelorette.title" class="font-logo text-4xl p-2 text-amber-900 font-bold"></p>
        <div class="border-b border-2 border-amber-900 lg:w-96 w-2/3"></div>
      </div>
      <div class="flex flex-col py-4 z-10 h-full items-center justify-center">
        <h2 i18n-key="bachelorette.subheader" class=" font-bold text-3xl text-amber-900 underline font-logo"></h2>
        <div class="flex flex-col rounded-lg h-36 w-80 text-lg font-serif justify-center items-center">
          <p i18n-key="bachelorette.dateTitle" class="text-amber-950 font-bold"></p>
          <p i18n-key="bachelorette.date" class="text-amber-950 max-lg:text-sm"></p>
          <a href="calendar/despedida.ics">
            <button i18n-key="bachelorette.saveTheDateButton" class="fade-button opacity-0 h-10 my-4 w-48 rounded-full border-4 shadow-md px-2 border-lime-950 bg-lime-900 text-amber-50 uppercase font-black font-serif hover:text-amber-200 text-base"></button>
          </a>
        </div>
        <div class="flex flex-col rounded-lg h-36 w-80 text-lg font-serif justify-center items-center">
          <p i18n-key="bachelorette.addressTitle" class="text-amber-950 font-bold"></p>
          <p i18n-key="bachelorette.address" class="text-amber-950 max-lg:text-sm"></p>
          <a href="https://www.google.com/maps/dir/?api=1&destination=18.467662437460437,-69.82525449113034" target="_blank" rel="noopener noreferrer">
            <button i18n-key="bachelorette.addressButton" class="fade-button opacity-0 h-10 my-4 w-48 rounded-full border-4 shadow-md px-2 border-lime-950 bg-lime-900 text-amber-50 uppercase font-black font-serif hover:text-amber-200 text-base"></button>
          </a>
        </div>
        <div class="flex flex-col rounded-lg h-36 w-80 text-lg font-serif justify-center items-center">
          <p i18n-key="bachelorette.locationTitle" class="text-amber-950 font-bold"></p>
          <p i18n-key="bachelorette.location" class="text-amber-950 max-lg:text-sm"></p>
          <a href="#">
            <button class="fade-button rsvp opacity-0 h-10 my-4 w-48 rounded-full border-4 shadow-md px-2 border-lime-950 bg-lime-900 text-amber-50 uppercase font-black font-serif hover:text-amber-200 text-base" data-source="bachelorette">RSVP</button>
          </a>
        </div>
      </div>
      <div id="countdown-section" class="flex flex-col justify-center items-center p-4 font-serif text-3xl text-amber-950 border-t-4 border-amber-950 bg-orange-100 z-20 lg:text-4xl w-screen">
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
    </div>
  </div>
`;

const numDays = bachelorette.querySelector("#num-days")!;
const numHours = bachelorette.querySelector("#num-hours")!;
const numMinutes = bachelorette.querySelector("#num-minutes")!;
const numSeconds = bachelorette.querySelector("#num-seconds")!;

const countdown = new CountdownTimer("2024-10-26T19:30:00");

countdown.start((days, hours, minutes, seconds) => {
  numDays.textContent = `${days}`;
  numHours.textContent = `${hours}`;
  numMinutes.textContent = `${minutes}`;
  numSeconds.textContent = `${seconds}`;
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".fade-button");

  const fadeInOnScroll = () => {
    buttons.forEach((button) => {
      const rect = button.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight * 0.95 &&
        rect.bottom >= window.innerHeight * 0.25
      ) {
        button.classList.add("fade-in-from-top");
        button.classList.remove("opacity-0");
      }
    });
  };

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll();
});

export default bachelorette;
