const dressCodeModal = document.createElement("div");
dressCodeModal.className =
  "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center";
dressCodeModal.innerHTML = `
  <div class="relative bg-lime-950 w-full max-w-lg p-4 rounded-lg shadow-md font-serif border border-lime-700">
    <div class="flex absolute pt-2 items-center rounded-full fixed lg:left-[12rem] left-32 top-[-2rem] w-32 h-32 bg-amber-950 border-amber-700 font-logo border z-50">
      <p class="py-4 px-2 text-amber-50 text-4xl">M&S</p>
    </div>
    <div class="flex justify-end">
      <button id="close-modal" class="text-amber-50 rounded-full border w-10 h-10 mb-2 bg-amber-950 border-amber-700 shadow-md text-3xl">&times;</button>
    </div>
    <div class="border-2 border-lime-700 bg-lime-800 relative p-4 rounded-lg text-center justify-center my-2">
        <p i18n-key="dressCodeModal.header" class="text-amber-50 text-4xl p-2 font-black font-stylized"></p>
        <p i18n-key="dressCodeModal.content" class="text-amber-50 text-2xl p-2 font-logo"></p>
        <p i18n-key="dressCodeModal.importantNote" class="text-amber-50 text-base p-2 font-semibold"></p>
    </div>
  </div>
`;

const closeModal = dressCodeModal.querySelector("#close-modal")!;

closeModal.addEventListener("click", () => {
  dressCodeModal.remove();
});

dressCodeModal.addEventListener("click", (event) => {
  if (event.target === dressCodeModal) {
    dressCodeModal.remove();
  }
});

export default dressCodeModal;
