import watercolorBg from "../assets/watercolor-bg.jpg";

const ourStory = document.createElement("section");
ourStory.className = "section relative w-screen h-screen bg-orange-50";
ourStory.id = "our-story";
ourStory.innerHTML = `
  <div class="flex w-screen h-screen flex-col items-center justify-center border-b-4 border-t-4 border-amber-950">\
    <img src="${watercolorBg}" alt="watercolor background" class="absolute object-cover object-bottom-left top-0 w-screen h-screen opacity-25" />
    <div class="flex flex-col space-y-1 pt-4 w-screen justify-center items-center">
        <div class="border-t border-2 border-amber-900 lg:w-96 w-2/3"></div>
        <p i18n-key="ourStory.title" class="font-logo text-4xl p-2 text-amber-900 font-bold"></p>
        <div class="border-b border-2 border-amber-900 lg:w-96 w-2/3"></div>
    </div>
  </div>
`;

export default ourStory;
