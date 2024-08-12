import watercolorBg from "../assets/watercolor-bg.jpg";
import flowerBorder1 from "../assets/flower-border-1.png";

const party = document.createElement("section");
party.className = "section relative w-screen h-screen";
party.id = "party";
party.innerHTML = `
  <div class="flex w-screen h-screen flex-col items-center justify-start border-b-4 border-amber-950 lg:space-y-8 space-y-2">
    <img src="${watercolorBg}" alt="watercolor background" class="absolute object-cover object-right top-0 w-screen h-screen opacity-25" />
    <div class="flex flex-col space-y-1 pt-4 w-screen justify-center items-center">
      <div class="border-t border-2 border-amber-900 lg:w-96 w-2/3"></div>
      <p i18n-key="party.title" class="font-logo text-4xl p-2 text-amber-900 font-bold"></p>
      <div class="border-b border-2 border-amber-900 lg:w-96 w-2/3"></div>
    </div>
    <div class="flex flex-col lg:space-y-12 space-y-6 pt-4 w-screen justify-center items-center">
    <div class="relative flex flex-col w-full h-80 justify-start items-center z-10 p-2">
      <img src="${flowerBorder1}" alt="flower border" class="absolute w-full scale-50 -bottom-28 -left-24 rotate-12 object-contain z-20 rounded-lg pointer-events-none" />
      <div class="relative flex flex-col rounded-lg shadow-md bg-amber-50 w-80 h-72 justify-start items-center p-2 z-10">
          <p i18n-key="party.musicHeader" class="text-amber-950 text-3xl p-2 font-semibold font-stylized"></p>
          <p i18n-key="party.musicContent" class="text-amber-950 text-sm text-base p-2 pb-10"></p>
          <a href="#">
              <button i18n-key="party.recommendSong" class="fade-button opacity-0 py-1 h-20 w-64 rounded-md border-4 shadow-md px-2 border-lime-950 bg-lime-900 text-amber-100 uppercase font-black font-serif hover:text-amber-200 text-lg"></button>
          </a>
      </div>
    </div>
    <div class="relative flex flex-col w-full h-80 justify-start items-center z-10 p-2">
      <img src="${flowerBorder1}" alt="flower border" class="absolute w-full scale-50 -bottom-28 -left-24 rotate-12 object-contain z-20 rounded-lg pointer-events-none" />
      <div class="flex flex-col rounded-lg shadow-md bg-amber-50 w-80 h-72 justify-start items-center z-10 p-2">
          <p i18n-key="party.dressCodeHeader" class="text-amber-950 text-3xl p-2 font-semibold font-stylized"></p>
          <p i18n-key="party.dressCodeContent" class="text-amber-950 text-sm text-base p-2"></p>
          <a href="#">
              <button i18n-key="party.dressCodeButton" class="relative top-2/3 dress-code fade-button opacity-0 h-20 w-64 rounded-md border-4 shadow-md px-2 border-lime-950 bg-lime-900 text-amber-100 uppercase font-black font-serif hover:text-amber-200 text-lg"></button>
          </a>
      </div>
    </div>
    </div>
  </div>
`;

export default party;
