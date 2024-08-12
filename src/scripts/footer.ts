import watercolorBg from "../assets/watercolor-bg.jpg";
import leafHeart from "../assets/leaf-heart.png";

const footer = document.createElement("section");
footer.className = "section relative w-screen h-screen bg-orange-50";
footer.id = "footer";
footer.innerHTML = `
  <div class="flex w-screen h-screen flex-col items-center justify-start">
    <img src="${watercolorBg}" alt="watercolor background" class="absolute object-cover object-right top-0 w-screen h-screen opacity-25" />
    <div class="flex flex-col space-y-1 pt-4 w-screen h-80 justify-start items-center text-center">
        <h1 i18n-key="footer.header" class="text-amber-950 text-4xl p-2 font-bold font-logo"></h1>
        <p i18n-key="footer.content" class="text-amber-950 p-2 font-serif"></p>
    </div>
    <div class="relative flex flex-col pt-4 w-full justify-center items-center">
      <img src="${leafHeart}" alt="leaf heart" class="absolute max-lg:w-full lg:w-1/3 z-10 rounded-lg pointer-events-none" />
      <div class="flex flex-col justify-center items-center rounded-full w-40 h-40">
        <h1 i18n-key="footer.socialHashtag" class="text-2xl font-bold font-serif text-lime-600 pb-4"></h1>
      </div>
    </div>
    <a href="https://listaderegalos.casacuesta.com/Event/SheylaLoraine-and-Malcom?utm_source=share" target="_blank" rel="noopener noreferrer">
        <button i18n-key="footer.socialLink" class="mt-24 lg:mt-56 w-auto h-auto rounded-full border-4 shadow-md px-2 border-lime-950 bg-lime-900 text-amber-50 uppercase font-black font-serif hover:text-amber-200 text-sm lg:text-base"></button>
    </a>
    <div class="flex flex-col bg-amber-800 z-10 w-screen h-auto border-t-2 border-amber-900 flex-grow mt-4 py-4 items-center">
        <h1 i18n-key="footer.names" class="text-amber-50 lg:text-4xl text-3xl p-2 font-bold font-logo"></h1>
        <div class="border-t-2 border-amber-50 w-full my-2"></div>
        <p i18n-key="footer.goodbye" class="text-amber-50 p-4 font-stylized text-3xl"></p>
    </div>
  </div>
`;

export default footer;
