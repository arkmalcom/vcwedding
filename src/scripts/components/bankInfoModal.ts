const bankInfoModal = document.createElement("div");
bankInfoModal.className =
  "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center";
bankInfoModal.innerHTML = `
  <div class="relative bg-amber-100 w-full max-w-lg p-4 rounded-lg shadow-md font-serif border border-amber-500">
    <div class="flex absolute pt-2 items-center rounded-full fixed lg:left-[12rem] left-32 top-[-2rem] w-32 h-32 bg-amber-950 border-amber-700 font-logo border z-50">
      <p class="py-4 px-2 text-amber-50 text-4xl">M&S</p>
    </div>
    <div class="flex justify-end">
      <button class="close-modal text-amber-50 rounded-full border w-10 h-10 mb-2 bg-amber-950 border-amber-700 shadow-md text-3xl">&times;</button>
    </div>
    <div id="modal-content" class="justify-center items-center text-center border-2 border-amber-500 bg-amber-200 relative p-4 rounded-lg">
        <h1 i18n-key="bankInfoModal.title" class="py-4 text-amber-900 font-stylized text-2xl pb-6"></h1>
        <p i18n-key="bankInfoModal.content" class="text-amber-900"></p>
        <h2 i18n-key="bankInfoModal.malcomHeader" class="text-amber-900 font-semibold"></h2>
        <p i18n-key="bankInfoModal.malcomContent" class="text-amber-900"></p>
        <h2 i18n-key="bankInfoModal.sheylaHeader" class="text-amber-900 font-semibold"></h2>
        <p i18n-key="bankInfoModal.sheylaContent" class="text-amber-900"></p>
    </div>
  </div>
`;

bankInfoModal.addEventListener("click", (event) => {
  if (event.target === bankInfoModal) {
    bankInfoModal.remove();
  }
});

export default bankInfoModal;
