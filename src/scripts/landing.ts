import leafBorder from "../assets/leaf-border.jpg";
import watercolorBg from "../assets/watercolor-bg.jpg";

const landing = document.createElement("div");
landing.className = "h-screen bg-cover bg-fixed max-lg:bg-left";
landing.style.backgroundImage = `url(${watercolorBg})`;
landing.innerHTML = `
  <div class="flex flex-col items-center justify-center">
    <img src="${leafBorder}" alt="watercolor leaves" class="absolute object-cover object-top top-0 w-screen h-screen opacity-75" />
    <div class="flex z-10 space-y-1 flex-col justify-center text-center text-amber-950 text-6xl font-logo font-semibold border-amber-950 h-screen w-auto my-10">
      <p>Malcom</p>
      <div class="flex items-center justify-center lg:m-2 text-amber-800">
        <div class="border-t border-amber-800 lg:w-1/4 w-32"></div>
        <span class="text-3xl font-serif mx-2 my-2">&</span>
        <div class="border-t border-amber-800 lg:w-1/4 w-32"></div>
      </div>
      <p>Sheyla</p>
      <div class="lg:py-8 py-8 flex lg:space-y-4 space-y-2 flex-col">
        <p i18n-key="saveTheDate" class="text-amber-950 lg:text-4xl text-base font-serif"></p>
        <p i18n-key="date" class="text-amber-800 lg:text-4xl text-base uppercase font-semibold font-serif"></p>
      </div>
      <div class="lg:py-8 py-4">
        <a href="#" class="rsvp text-amber-950 uppercase font-semibold font-stylized hover:text-amber-600 hover:border-amber-600 border-2 border-amber-950 p-2">RSVP</a>
      </div>
      <div class="relative top-16">
        <i class="fas fa-chevron-down down-arrow bottom-0 text-amber-950 lg:text-4xl text-2xl"></i>
      </div>
    </div>
  </div>
`;

export default landing;
