import watercolorBg from "../assets/watercolor-bg.jpg";
import flowerBorder1 from "../assets/flower-border-1.png";

const information = document.createElement("section");
information.className = "section relative w-screen h-screen";
information.id = "information";
information.innerHTML = `
  <div class="flex w-screen h-screen flex-col items-center justify-start lg:space-y-8 space-y-2">
  <img src="${watercolorBg}" alt="watercolor background" class="absolute object-cover object-left-bottom top-0 w-screen h-screen opacity-25" />
  <div class="relative flex flex-col w-full h-80 justify-start items-center z-10 p-2">
    <img src="${flowerBorder1}" alt="flower border" class="absolute w-full scale-50 -top-24 -left-24 rotate-90 object-contain z-20 rounded-lg pointer-events-none" />
    <div class="flex flex-col rounded-lg shadow-md bg-amber-50 w-80 h-64 justify-center items-center text-center z-10 p-2">
        <div class="p-4 m-4 border-2 border-amber-800 h-64">
            <p i18n-key="information.noKidsHeader" class="text-amber-950 text-3xl p-2 py-4 font-semibold font-stylized"></p>
            <p i18n-key="information.noKidsContent" class="text-amber-950 text-sm text-base p-2"></p>
        </div>
    </div>
  </div>
  <div class="relative flex flex-col w-full justify-start items-center z-10">
    <img src="${flowerBorder1}" alt="flower border" class="absolute scale-50 -bottom-36 -left-28 rotate-12 object-contain z-20 rounded-lg pointer-events-none" />
    <div class="flex flex-col rounded-lg shadow-md bg-amber-50 w-80 h-96 justify-start py-8 space-y-1 text-center z-10">
        <p i18n-key="information.giftListsHeader" class="text-amber-950 text-3xl font-semibold font-stylized"></p>
        <p i18n-key="information.giftListsContent" class="text-amber-950 text-sm text-base p-2"></p>
        <a href="https://listaderegalos.casacuesta.com/Event/SheylaLoraine-and-Malcom?utm_source=share" target="_blank" rel="noopener noreferrer">
          <button i18n-key="information.bacheloretteList" class="h-10 w-56 h-auto rounded-full border-4 shadow-md px-2 border-lime-950 bg-lime-900 text-amber-50 uppercase font-black font-serif hover:text-amber-800 text-sm lg:text-xl></button>
        </a>
        <a href="https://listaderegalos.casacuesta.com/Event/Malcom-SheylaLoraine" target="_blank" rel="noopener noreferrer">
          <button i18n-key="information.weddingList" class="h-10 my-4 w-56 h-auto rounded-full border-4 shadow-md px-2 border-lime-950 bg-lime-900 text-amber-50 uppercase font-black font-serif hover:text-amber-800 text-sm lg:text-xl"></button>
        </a>
        <p i18n-key="information.bankInfoHeader" class="text-amber-950 text-3xl font-semibold font-stylized"></p>
        <p i18n-key="information.bankInfoContent" class="text-amber-950 text-sm text-base p-2"></p>
    </div>
  </div>
  </div>
`;

export default information;
