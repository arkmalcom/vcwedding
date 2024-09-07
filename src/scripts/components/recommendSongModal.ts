import { updateContent } from "../i18n/updateContent";
import { addToDB } from "../utils/firestoreOperations";
import { addSongToPlaylist, getAccessToken } from "../utils/spotifyOperations";

const stage = import.meta.env.VITE_ENV || "dev";

let modalContent = `
  <form id="recommend-song-form" class="flex flex-col space-y-2 text-center justify-center items-center pt-4 w-full">
    <h1 i18n-key="recommendSongForm.title" class="text-amber-900 font-stylized text-2xl pb-6"></h1>
    <label for="name" i18n-key="recommendSongForm.name" class="text-amber-900 font-serif text-sm"></label>
    <input type="text" id="name" name="name" class="border-2 border-amber-500 bg-amber-200 p-2 rounded-md text-amber-900 focus:border-amber-500 focus:bg-amber-500 focus:ring-amber-600 hover:border-amber-500" />
    <label for="song-title" i18n-key="recommendSongForm.song" class="text-amber-900 font-serif text-sm"></label>
    <input type="text" id="song-title" name="song-title" class="border-2 border-amber-500 bg-amber-200 p-2 rounded-md text-amber-900 focus:border-amber-500 focus:bg-amber-500 focus:ring-amber-600 hover:border-amber-500" required />
    <div id="search-results" class="hidden relative z-10 space-y-1 text-amber-900 bg-amber-100 shadow-lg border border-amber-500 rounded cursor-pointer"></div>
    <input type="hidden" id="song-url" name="song-url" class="hidden" required />
    <input type="hidden" id="song-id" name="song-id" class="hidden" required />
    <button type="submit" i18n-key="recommendSongForm.submit" class="border-2 border-amber-500 bg-amber-200 h-8 w-24 rounded-full text-amber-900 hover:bg-amber-500 hover:border-amber-500"></button>
  </form>
`;

const recommendSongModal = document.createElement("div");
recommendSongModal.className =
  "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center";
recommendSongModal.innerHTML = `
  <div class="relative bg-amber-100 w-full max-w-lg p-4 rounded-lg shadow-md font-serif border border-amber-500">
    <div class="flex absolute pt-2 items-center rounded-full fixed lg:left-[12rem] left-32 top-[-2rem] w-32 h-32 bg-amber-950 border-amber-700 font-logo border z-50">
      <p class="py-4 px-2 text-amber-50 text-4xl">M&S</p>
    </div>
    <div class="flex justify-end">
      <button class="close-modal text-amber-50 rounded-full border w-10 h-10 mb-2 bg-amber-950 border-amber-700 shadow-md text-3xl">&times;</button>
    </div>
    <div id="modal-content" class="border-2 border-amber-500 bg-amber-200 relative p-4 rounded-lg">
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

  const songTitleInput = recommendSongForm.querySelector(
    "#song-title",
  ) as HTMLInputElement;
  const songUrlInput = recommendSongForm.querySelector(
    "#song-url",
  ) as HTMLInputElement;
  const nameInput = recommendSongForm.querySelector(
    "#name",
  ) as HTMLInputElement;
  const songIdInput = recommendSongForm.querySelector(
    "#song-id",
  ) as HTMLInputElement;

  const name = nameInput.value;
  const songTitle = songTitleInput.value;
  const songUrl = songUrlInput.value;
  const songId = songIdInput.value;

  let data = {
    name,
    song_title: songTitle,
    song_url: songUrl,
    song_id: songId,
  };

  const trackUri = `spotify:track:${songId}`;
  const accessToken = await getAccessToken();

  if (stage === "prod") {
    await addToDB(data, "songs");
    await addSongToPlaylist(accessToken, trackUri);
  }

  const modalContentContainer = recommendSongModal.querySelector(
    "#modal-content",
  ) as HTMLDivElement;
  modalContentContainer.innerHTML = `
    <form id="recommend-song-form" class="flex flex-col space-y-2 text-center justify-center items-center pt-4 w-full">
      <h1 i18n-key="recommendSongForm.title" class="text-amber-900 font-stylized text-2xl pb-6"></h1>
      <p i18n-key="recommendSongForm.submitted" class="text-amber-900"></p>
      <label for="name" i18n-key="recommendSongForm.name" class="text-amber-900 font-serif text-sm"></label>
      <input type="text" id="name" name="name" class="border-2 border-amber-500 bg-amber-200 p-2 rounded-md text-amber-900 focus:border-amber-500 focus:bg-amber-500 focus:ring-amber-600 hover:border-amber-500" value=${name} />
      <label for="song-title" i18n-key="recommendSongForm.song" class="text-amber-900 font-serif text-sm"></label>
      <input type="text" id="song-title" name="song-title" class="border-2 border-amber-500 bg-amber-200 p-2 rounded-md text-amber-900 focus:border-amber-500 focus:bg-amber-500 focus:ring-amber-600 hover:border-amber-500" required />
      <div id="search-results" class="hidden relative z-10 space-y-1 text-amber-900 bg-amber-100 shadow-lg border border-amber-500 rounded cursor-pointer"></div>
      <input type="hidden" id="song-url" name="song-url" class="hidden" required />
      <button type="submit" i18n-key="recommendSongForm.submit" class="border-2 border-amber-500 bg-amber-200 h-8 w-24 rounded-full text-amber-900 hover:bg-amber-500 hover:border-amber-500"></button>
    </form>
  `;

  updateContent();
});

document.addEventListener("click", (event: MouseEvent) => {
  const resultsContainer = document.querySelector(
    "#search-results",
  ) as HTMLDivElement;
  if (!resultsContainer) {
    return;
  }
  if (!resultsContainer.contains(event.target as Node)) {
    resultsContainer.classList.add("hidden");
  }
});

export default recommendSongModal;
