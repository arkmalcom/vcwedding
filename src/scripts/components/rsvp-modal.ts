const rsvpModal = document.createElement("div");
rsvpModal.className =
  "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center";
rsvpModal.innerHTML = `
  <div class="bg-amber-950 w-full max-w-lg p-4 rounded-lg shadow-md font-serif">
    <div class="flex justify-end">
      <button id="close-modal" class="text-amber-50 rounded-full border w-10 h-10 bg-amber-800 border-amber-700 text-3xl">&times;</button>
    </div>
    <form id="rsvp-form" class="flex flex-col space-y-4">
      <label for="name" id="rsvp-form-name" class="text-amber-50"></label>
      <input type="text" id="name" name="name" class="border-2 border-amber-800 p-2 rounded-md" required />
      <label for="email" id="rsvp-form-email" class="text-amber-50"></label>
      <input type="email" id="email" name="email" class="border-2 border-amber-800 p-2 rounded-md" required />
      <label for="guests" id="rsvp-form-guests" class="text-amber-50"></label>
      <input type="number" id="guests" name="guests" class="border-2 border-amber-800 p-2 rounded-md" required />
      <button id="submit-button" type="submit" class="bg-amber-800 text-amber-50 uppercase font-semibold font-serif p-2 rounded-md"></button>
    </form>
  </div>
`;

const closeModal = rsvpModal.querySelector("#close-modal")!;

closeModal.addEventListener("click", () => {
  rsvpModal.remove();
});

const rsvpForm = rsvpModal.querySelector("#rsvp-form")!;

rsvpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = (rsvpForm.querySelector("#name") as HTMLInputElement).value;
  const email = (rsvpForm.querySelector("#email") as HTMLInputElement).value;
  const guests = (rsvpForm.querySelector("#guests") as HTMLInputElement).value;
  const message = (rsvpForm.querySelector("#message") as HTMLInputElement)
    .value;

  console.log(name, email, guests, message);
});

export default rsvpModal;
