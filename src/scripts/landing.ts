import leafBorder from "../assets/leaf-border.jpg";
import watercolorBg from "../assets/watercolor-bg.jpg";

const landing = document.createElement("section");
landing.className =
  "section w-screen h-screen bg-cover bg-fixed max-md:bg-left";
landing.style.backgroundImage = `url(${watercolorBg})`;
landing.innerHTML = `
  <div class="flex items-center justify-center">
    <img src="${leafBorder}" alt="watercolor leaves" class="absolute object-cover w-screen h-screen z-1 opacity-75" />
    <div class="flex z-10 space-y-1 flex-col justify-center text-center text-amber-950 text-6xl font-logo font-semibold border-amber-950 h-screen md:w-1/2">
      <p>Malcom</p>
      <div class="flex items-center justify-center md:m-2 text-amber-800">
        <div class="border-t border-amber-800 md:w-1/4 w-32"></div>
        <span class="text-3xl font-serif mx-2 my-2">&</span>
        <div class="border-t border-amber-800 md:w-1/4 w-32"></div>
      </div>
      <p>Sheyla</p>
      <div class="md:py-24 py-8 flex md:space-y-4 space-y-2 flex-col">
        <p id="save-the-date" class="text-amber-950 md:text-4xl text-base font-serif"></p>
        <p id="date" class="text-amber-800 md:text-4xl text-base uppercase font-semibold font-serif"></p>
      </div>
      <div class="md:py-12 py-4">
        <a href="#" class="text-amber-950 uppercase font-semibold font-stylized hover:text-amber-200 hover:border-amber-200 border-2 border-amber-950 p-2">RSVP</a>
      </div>
    </div>
  </div>
`;

export default landing;
