import watercolorBg from "../assets/watercolor-bg.jpg";
import flowerBorder1 from "../assets/flower-border-1.png";

const information = document.createElement("section");
information.className = "section relative w-screen h-full";
information.id = "information";
information.innerHTML = `
  <div class="flex w-screen h-full flex-col items-center border-b-4 border-amber-950 justify-start lg:space-y-8 space-y-2">
  <img src="${watercolorBg}" alt="watercolor background" class="absolute object-cover object-left-bottom top-0 w-screen h-full opacity-25" />
  <div class="relative flex flex-col w-auto h-80 justify-start items-center z-10 p-2">
    <img src="${flowerBorder1}" alt="flower border" class="absolute max-lg:scale-50 lg:h-56 lg:w-56 -top-8 -left-12 max-lg:-top-24 max-lg:-left-24 rotate-90 object-contain z-20 rounded-lg pointer-events-none" />
    <div class="flex flex-col rounded-lg shadow-md bg-amber-50 w-80 h-64 justify-center items-center text-center z-10 p-2">
        <div class="p-4 m-4 border-2 border-amber-700 h-64">
            <p i18n-key="information.noKidsHeader" class="text-amber-950 text-3xl p-2 py-4 font-semibold font-stylized"></p>
            <p i18n-key="information.noKidsContent" class="text-amber-950 text-sm text-base p-2"></p>
        </div>
    </div>
  </div>
  <div id="gift-lists" class="relative flex flex-col w-auto justify-start items-center z-10">
    <img src="${flowerBorder1}" alt="flower border" class="absolute max-lg:scale-50 lg:h-56 lg:w-56 -left-14 -bottom-12 max-lg:-bottom-28 max-lg:-left-28 rotate-12 object-contain z-20 rounded-lg pointer-events-none" />
    <div class="flex flex-col rounded-lg shadow-md bg-amber-50 w-80 h-96 justify-start max-lg:py-2 text-center z-10">
        <p i18n-key="information.giftListsHeader" class="text-amber-950 text-3xl font-semibold font-stylized"></p>
        <p i18n-key="information.giftListsContent" class="text-amber-950 text-sm p-2"></p>
        <a href="https://listaderegalos.casacuesta.com/Event/Malcom-SheylaLoraine?utm_source=share" target="_blank" rel="noopener noreferrer">
          <button i18n-key="information.weddingList" class="w-56 lg:w-64 h-7 rounded-full border-4 shadow-md px-2 border-lime-950 bg-lime-900 text-amber-50 uppercase font-black font-serif hover:text-amber-200 text-sm lg:text-base"></button>
        </a>
        <a href="https://listaderegalos.casacuesta.com/Event/SheylaLoraine-and-Malcom?utm_source=share" target="_blank" rel="noopener noreferrer">
          <button i18n-key="information.bacheloretteList" class="my-4 w-56 lg:w-64 h-7 rounded-full border-4 shadow-md px-2 border-lime-950 bg-lime-900 text-amber-50 uppercase font-black font-serif hover:text-amber-200 text-sm lg:text-base"></button>
        </a>
        <p i18n-key="information.bankInfoHeader" class="text-amber-950 text-3xl font-semibold font-stylized"></p>
        <p i18n-key="information.bankInfoContent" class="text-amber-950 text-sm text-base p-2"></p>
        <a>
        <button i18n-key="information.bankInfoButton" class="bank-info w-56 lg:w-64 h-7 rounded-full border-4 shadow-md border-lime-950 bg-lime-900 text-amber-50 uppercase font-black font-serif hover:text-amber-200 text-sm lg:text-base"></button></a>
    </div>
  </div>
  </div>
`;

export default information;
