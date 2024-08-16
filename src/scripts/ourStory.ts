import "fslightbox";

import watercolorBg from "../assets/watercolor-bg.jpg";
import pic1 from "../assets/gallery/pic1.jpeg";
import pic2 from "../assets/gallery/pic2.jpeg";
import pic3 from "../assets/gallery/pic3.jpeg";
import pic4 from "../assets/gallery/pic4.jpeg";
import pic5 from "../assets/gallery/pic5.jpeg";
import pic6 from "../assets/gallery/pic6.jpeg";
import pic7 from "../assets/gallery/pic7.jpeg";
import pic8 from "../assets/gallery/pic8.jpeg";
import pic9 from "../assets/gallery/pic9.jpeg";
import pic10 from "../assets/gallery/pic10.jpeg";
import pic11 from "../assets/gallery/pic11.jpeg";
import pic12 from "../assets/gallery/pic12.jpeg";
import pic13 from "../assets/gallery/pic13.jpeg";
import pic14 from "../assets/gallery/pic14.jpeg";
import pic15 from "../assets/gallery/pic15.jpeg";

const ourStory = document.createElement("section");
ourStory.className = "section relative w-screen h-full bg-orange-50";
ourStory.id = "our-story";
ourStory.innerHTML = `
  <div class="flex w-screen h-full flex-col items-center justify-start border-b-4 border-amber-950">
    <img src="${watercolorBg}" alt="watercolor background" class="absolute object-cover object-bottom-left top-0 w-screen h-full opacity-25" />
    <div class="flex flex-col space-y-1 pt-4 w-screen items-center">
        <div class="border-t border-2 border-amber-900 lg:w-96 w-2/3"></div>
        <p i18n-key="ourStory.title" class="font-logo text-4xl p-2 text-amber-900 font-bold"></p>
        <div class="border-b border-2 border-amber-900 lg:w-96 w-2/3"></div>
    </div>
    <p i18n-key="ourStory.content" class="text-amber-900 p-2 py-4 font-serif"></p>
  <div class="relative w-screen overflow-hidden">
  <div class="flex lg:flex-row flex-col max-lg:space-y-2 items-center justify-center space-x-2 lg:space-x-6 mb-6">
    <a href="${pic2}" data-fslightbox="gallery" class="transform transition-transform duration-200 hover:scale-105 flex-shrink-0 w-24 lg:w-48">
      <div class="lg:block hidden bg-black p-1 border-amber-50 border-4 rounded-lg">
        <img src="${pic2}" alt="gallery image" class="w-full h-auto rounded-lg" />
      </div>
    </a>
    <a href="${pic3}" data-fslightbox="gallery" class="transform transition-transform duration-200 hover:scale-105 flex-shrink-0 w-24 lg:w-48">
      <div class="bg-black p-1 border-amber-50 border-4 rounded-lg">
        <img src="${pic3}" alt="gallery image" class="w-full h-auto rounded-lg" />
      </div>
    </a>
    <a href="${pic14}" data-fslightbox="gallery" class="transform transition-transform duration-200 hover:scale-105 flex-1 max-w-3xl">
      <div class="bg-black p-1 border-amber-50 border-4 rounded-lg">
        <img src="${pic14}" alt="gallery image" class="w-full h-auto rounded-lg" />
      </div>
    </a>
    <a href="${pic12}" data-fslightbox="gallery" class="transform transition-transform duration-200 hover:scale-105 flex-shrink-0 w-24 lg:w-48">
      <div class="bg-black p-1 border-amber-50 border-4 rounded-lg">
        <img src="${pic12}" alt="gallery image" class="w-full h-auto rounded-lg" />
      </div>
    </a>
    <a href="${pic6}" data-fslightbox="gallery" class="transform transition-transform duration-200 hover:scale-105 flex-shrink-0 w-24 lg:w-48">
      <div class="lg:block hidden bg-black p-1 border-amber-50 border-4 rounded-lg">
        <img src="${pic6}" alt="gallery image" class="w-full h-auto rounded-lg" />
      </div>
    </a>
    <a href="${pic1}" data-fslightbox="gallery"></a>
    <a href="${pic4}" data-fslightbox="gallery"></a>
    <a href="${pic5}" data-fslightbox="gallery"></a>
    <a href="${pic7}" data-fslightbox="gallery"></a>
    <a href="${pic8}" data-fslightbox="gallery"></a>
    <a href="${pic9}" data-fslightbox="gallery"></a>
    <a href="${pic10}" data-fslightbox="gallery"></a>
    <a href="${pic11}" data-fslightbox="gallery"></a>
    <a href="${pic13}" data-fslightbox="gallery"></a>
  </div>
</div>

`;

document.body.appendChild(ourStory);
setTimeout(() => {
  (window as any).refreshFsLightbox();
}, 0);

export default ourStory;
