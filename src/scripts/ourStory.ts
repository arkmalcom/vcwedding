import watercolorBg from "../assets/watercolor-bg.jpg";

const ourStory = document.createElement("section");
ourStory.className = "section relative w-screen h-screen bg-orange-50";
ourStory.id = "our-story";
ourStory.innerHTML = `
  <div class="flex w-screen h-screen flex-col items-center justify-center border-b-4 border-t-4 border-amber-950">\
    <img src="${watercolorBg}" alt="watercolor background" class="absolute object-cover object-bottom-left top-0 w-screen h-screen opacity-25" />
  </div>
`;

export default ourStory;