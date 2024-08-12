import "fslightbox";

import watercolorBg from "../assets/watercolor-bg.jpg";
import pic1 from "../assets/gallery/pic1.jpg";
import pic2 from "../assets/gallery/pic2.jpg";
import pic3 from "../assets/gallery/pic3.jpg";
import pic4 from "../assets/gallery/pic4.jpg";
import pic5 from "../assets/gallery/pic5.jpg";

const ourStory = document.createElement("section");
ourStory.className = "section relative w-screen h-screen bg-orange-50";
ourStory.id = "our-story";
ourStory.innerHTML = `
  <div class="flex w-screen h-screen flex-col items-center justify-start border-b-4 border-amber-950">
    <img src="${watercolorBg}" alt="watercolor background" class="absolute object-cover object-bottom-left top-0 w-screen h-screen opacity-25" />
    <div class="flex flex-col space-y-1 pt-4 w-screen items-center">
        <div class="border-t border-2 border-amber-900 lg:w-96 w-2/3"></div>
        <p i18n-key="ourStory.title" class="font-logo text-4xl p-2 text-amber-900 font-bold"></p>
        <div class="border-b border-2 border-amber-900 lg:w-96 w-2/3"></div>
    </div>
    <p i18n-key="ourStory.content" class="text-amber-900 p-2 py-10 font-serif"></p>
  <div class="relative w-screen overflow-hidden">
  <div class="flex lg:flex-row flex-col items-center justify-center space-x-2 lg:space-x-6 lg:pt-3">
    <a href="${pic2}" data-fslightbox="gallery" class="transform transition-transform duration-200 hover:scale-105 flex-shrink-0 w-24 lg:w-48">
      <div class="bg-black p-1 border-amber-50 border-4 rounded-lg">
        <img src="${pic2}" alt="gallery image" class="w-full h-auto rounded-lg" />
      </div>
    </a>
    <a href="${pic5}" data-fslightbox="gallery" class="transform transition-transform duration-200 hover:scale-105 flex-shrink-0 w-24 lg:w-48">
      <div class="bg-black p-1 border-amber-50 border-4 rounded-lg">
        <img src="${pic5}" alt="gallery image" class="w-full h-auto rounded-lg" />
      </div>
    </a>
    <a href="${pic1}" data-fslightbox="gallery" class="transform transition-transform duration-200 hover:scale-105 flex-1 max-w-3xl">
      <div class="bg-black p-1 border-amber-50 border-4 rounded-lg">
        <img src="${pic1}" alt="gallery image" class="w-full h-auto rounded-lg" />
      </div>
    </a>
    <a href="${pic4}" data-fslightbox="gallery" class="transform transition-transform duration-200 hover:scale-105 flex-shrink-0 w-24 lg:w-48">
      <div class="bg-black p-1 border-amber-50 border-4 rounded-lg">
        <img src="${pic4}" alt="gallery image" class="w-full h-auto rounded-lg" />
      </div>
    </a>
    <a href="${pic4}" data-fslightbox="gallery" class="transform transition-transform duration-200 hover:scale-105 flex-shrink-0 w-24 lg:w-48">
      <div class="bg-black p-1 border-amber-50 border-4 rounded-lg">
        <img src="${pic4}" alt="gallery image" class="w-full h-auto rounded-lg" />
      </div>
    </a>
  </div>
</div>

`;

document.body.appendChild(ourStory);
setTimeout(() => {
  (window as any).refreshFsLightbox();
}, 0);

export default ourStory;
