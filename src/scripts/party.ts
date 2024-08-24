import watercolorBg from "../assets/watercolor-bg.jpg";
import flowerBorder1 from "../assets/flower-border-1.png";

const party = document.createElement("section");
party.className = "section relative w-screen h-full";
party.id = "party";
party.innerHTML = `
  <div class="flex w-screen h-full flex-col items-center justify-start border-b-4 border-amber-950 lg:space-y-8 space-y-2">
    <img src="${watercolorBg}" alt="watercolor background" class="absolute object-cover object-right top-0 w-screen h-full opacity-25" />
    <div class="flex flex-col space-y-1 pt-4 w-screen justify-center items-center">
      <div class="border-t border-2 border-amber-900 lg:w-96 w-2/3"></div>
      <p i18n-key="party.title" class="font-logo text-4xl p-2 text-amber-900 font-bold"></p>
      <div class="border-b border-2 border-amber-900 lg:w-96 w-2/3"></div>
    </div>
    <div class="flex flex-col lg:space-y-12 space-y-6 pt-4 w-screen justify-center items-center">
    <div class="relative flex flex-col w-auto h-80 justify-start items-center z-10 p-2">
      <img src="${flowerBorder1}" alt="flower border" class="absolute max-lg:scale-50 lg:h-56 lg:w-56 -left-12 -bottom-10 max-lg:-bottom-24 max-lg:-left-24 rotate-12 object-contain z-20 rounded-lg pointer-events-none" />
      <div class="relative flex flex-col rounded-lg shadow-md bg-amber-50 w-80 h-72 justify-start items-center p-2 z-10 text-center">
          <p i18n-key="party.musicHeader" class="text-amber-950 text-3xl p-2 font-semibold font-stylized"></p>
          <p i18n-key="party.musicContent" class="text-amber-950 text-sm text-base p-2 pb-10"></p>
          <div class="flex-grow"></div>
          <a href="#">
              <button i18n-key="party.recommendSong" class="mb-4 fade-button opacity-0 py-1 h-auto w-64 lg:w-72 rounded-md border-4 shadow-md px-2 border-lime-950 bg-lime-900 text-amber-100 uppercase font-black font-serif hover:text-amber-200 text-sm lg:text-base"></button>
          </a>
      </div>
    </div>
    <div id="dress-code" class="relative flex flex-col w-auto h-80 justify-start items-center z-10 p-2">
      <img src="${flowerBorder1}" alt="flower border" class="absolute max-lg:scale-50 lg:h-56 lg:w-56 -left-12 -bottom-10 max-lg:-bottom-24 max-lg:-left-24 rotate-12 object-contain z-20 rounded-lg pointer-events-none" />
      <div class="flex flex-col rounded-lg shadow-md bg-amber-50 w-80 h-72 justify-start items-center z-10 p-2 text-center">
        <div class="p-4 m-4 border-2 border-amber-700 h-64">
          <p i18n-key="party.dressCodeHeader" class="text-amber-950 text-3xl p-2 font-semibold font-stylized"></p>
          <p i18n-key="party.dressCodeSubheader" class="text-amber-950 text-3xl p-2 font-logo"></p>
          <p i18n-key="party.dressCodeContent" class="text-amber-950 text-base p-2"></p>
          <p i18n-key="party.dressCodeNote" class="text-amber-950 text-base p-2 font-bold"></p>
        <div>
      </div>
    </div>
    </div>
  </div>
`;

export default party;
