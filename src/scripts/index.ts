import '../styles/style.css'

const app = document.querySelector<HTMLDivElement>("#app")!;

const navbar = document.createElement("nav");
navbar.className = "navbar";
navbar.innerHTML = `
  <div class="w-screen h-50 flex items-center bg-amber-950 fixed shadow-md">
    <div class="flex space-x-4 p-2 w-full justify-between">
      <div class="flex items-center space-x-4">
        <div class="text-amber-50 text-2xl font-semibold font-logo text-2xl">M&S</div>
      </div>
      <ul class="flex space-x-4">
        <li><a href="#" class="text-amber-50 uppercase font-semibold font-serif hover:text-amber-200">Our Story</a></li>
        <li><a href="#" class="text-amber-50 uppercase font-semibold font-serif hover:text-amber-200">Schedule</a></li>
        <li><a href="#" class="text-amber-200 uppercase font-semibold font-serif hover:text-amber-400 hover:border-amber-400 border-2 border-amber-200 p-2">RSVP</a></li>
    </div>
  </div>
`

const landing = document.createElement("div");
landing.className = "landing";
landing.innerHTML = `
  <div class="w-screen h-screen flex items-center justify-center bg-orange-50">
    <div class="flex space-y-4 flex-col justify-center text-center text-amber-950 text-6xl font-logo font-semibold border-4 border-amber-950 h-1/2 w-1/2">
      <p>Sheyla</p>
      <p class="font-stylized text-4xl">and</p>
      <p>Malcom</p>
      <div class="p-12">
        <p class="text-amber-950 text-2xl font-semibold">Save the Date</p>
        <p class="text-amber-950 text-2xl uppercase font-semibold font-serif">November 9, 2024</p>
      </div>
    </div>
  </div>
`

app.appendChild(navbar);
app.appendChild(landing);