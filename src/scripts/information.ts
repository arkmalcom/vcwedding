import watercolorBg from "../assets/watercolor-bg.jpg";
import flowerBorder1 from "../assets/flower-border-1.png";

const information = document.createElement("section");
information.className = "section relative w-screen h-screen";
information.id = "information";
information.innerHTML = `
  <div class="flex w-screen h-screen flex-col items-center justify-start lg:space-y-8 space-y-2">
  <img src="${watercolorBg}" alt="watercolor background" class="absolute object-cover object-left-bottom top-0 w-screen h-screen opacity-25" />
  <div class="relative flex flex-col w-full h-80 justify-start items-center z-10 p-2">
    <img src="${flowerBorder1}" alt="flower border" class="absolute w-full h-56 -top-4 -left-24 rotate-90 object-contain z-20 rounded-lg pointer-events-none" />
    <div class="flex flex-col rounded-lg shadow-md bg-amber-50 w-80 h-64 justify-center items-center z-10 p-2">
        <div class="p-4 m-4 border-2 border-amber-800 h-64">
            <p i18n-key="information.noKidsHeader" class="text-amber-950 text-3xl p-2 font-semibold font-stylized"></p>
            <p i18n-key="information.noKidsContent" class="text-amber-950 text-sm text-base p-2"></p>
        </div>
    </div>
  </div>
  </div>
`;

export default information;
