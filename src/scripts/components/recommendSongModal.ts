import { updateContent } from "../i18n/updateContent";
import { addToDB } from "../utils/dbOperations";

const stage = import.meta.env.VITE_ENV || "dev";

let modalContent = `
  <form id="recommend-song-form" class="flex flex-col space-y-1">
    <label for="name" i18n-key="recommendSongForm.song" class="text-amber-50 font-stylized text-2xl"></label>
    <input type="text" id="song-title" name="song-title" class="border-2 border-lime-950 bg-lime-700 p-2 rounded-md text-amber-50 focus:border-lime-500 focus:bg-lime-600 focus:ring-lime-600 hover:border-lime-500" required />
    <input type="hidden" id="song-url" name="song-url" class="border-2 border-lime-950 bg-lime-700 p-2 rounded-md text-amber-50 focus:border-lime-500 focus:bg-lime-600 focus:ring-lime-600 hover:border-lime-500" required />
`;

const recommendSongModal = document.createElement("div");
recommendSongModal.className =
  "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center";
recommendSongModal.innerHTML = `
  <div class="relative bg-lime-950 w-full max-w-lg p-4 rounded-lg shadow-md font-serif border border-lime-700">
    <div class="flex absolute pt-2 items-center rounded-full fixed lg:left-[12rem] left-32 top-[-2rem] w-32 h-32 bg-amber-950 border-amber-700 font-logo border z-50">
      <p class="py-4 px-2 text-amber-50 text-4xl">M&S</p>
    </div>
    <div class="flex justify-end">
      <button class="close-modal text-amber-50 rounded-full border w-10 h-10 mb-2 bg-amber-950 border-amber-700 shadow-md text-3xl">&times;</button>
    </div>
    <div id="modal-content" class="border-2 border-lime-700 bg-lime-800 relative p-4 rounded-lg">
      ${modalContent}
    </div>
  </div>
`;

const closeModalButtons = document.querySelectorAll(".close-modal");

closeModalButtons.forEach((closeModal) => {
  closeModal.addEventListener("click", () => {
    recommendSongModal.remove();
  });
});

recommendSongModal.addEventListener("click", (event) => {
  if (event.target === recommendSongModal) {
    recommendSongModal.remove();
  }
});

const recommendSongForm = recommendSongModal.querySelector(
  "#recommend-song-form",
)!;

recommendSongForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const songTitle = (
    recommendSongForm.querySelector("#song-title") as HTMLInputElement
  ).value;
  const songUrl = (
    recommendSongForm.querySelector("#song-url") as HTMLInputElement
  ).value;

  let data = {
    song_title: songTitle,
    song_url: songUrl,
  };

  if (stage === "prod") {
    await addToDB(data, "songs");
  }

  updateContent();
});

export default recommendSongModal;
