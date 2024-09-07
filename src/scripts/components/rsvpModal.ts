import { updateContent } from "../i18n/updateContent";
import { getInviteTypeFromURL } from "../utils/inviteType";
import { addToDB } from "../utils/firestoreOperations";

const inviteType = getInviteTypeFromURL();
const stage = import.meta.env.VITE_ENV || "dev";

let modalContent = `
  <form id="rsvp-form" class="flex flex-col space-y-1 items-center pt-4">
    <label for="name" i18n-key="rsvpForm.name" class="text-amber-900 font-serif lg:text-lg text-sm"></label>
    <input type="text" id="name" name="name" class="border-2 border-amber-600 bg-amber-200 p-2 rounded-md text-amber-900 focus:border-amber-500 focus:bg-amber-600 focus:ring-amber-500 hover:border-amber-500" required />
    <label for="email" i18n-key="rsvpForm.email" class="text-amber-900 font-serif lg:text-lg text-sm"></label>
    <input type="email" id="email" name="email" class="border-2 border-amber-600 bg-amber-200 p-2 rounded-md text-amber-900 focus:border-amber-500 focus:bg-amber-600 focus:ring-amber-500 hover:border-amber-500" required />
    <div class="flex space-x-4 justify-center items-center">
      <input type="radio" id="attending-yes" name="attending" value="yes" class="border-amber-600 bg-amber-500 text-lime-500 focus:ring-lime-700 focus:ring-2 focus:ring-amber-500 hover:border-amber-500" required />
      <label i18n-key="rsvpForm.attendingYes" class="text-amber-900 p-0 m-0 lg:text-lg text-sm"></label>
      <input type="radio" id="attending-no" name="attending" value="no" class="border-amber-600 bg-amber-500 text-lime-500 focus:ring-lime-700 focus:ring-2 focus:ring-amber-500 hover:border-amber-500" required />
      <label id="attending-no-label" i18n-key="rsvpForm.attendingNo" class="text-amber-900 lg:text-lg text-sm"></label>
    </div>
`;

if (inviteType === "plus-one") {
  modalContent += `
    <div class="border-2 border-b w-full border-amber-950 my-4"></div>
    <p i18n-key="rsvpForm.plusOne" class="text-amber-900 font-serif lg:text-lg text-sm"></p>
    <label for="plus-one-name" i18n-key="rsvpForm.name" class="text-amber-900 font-serif lg:text-lg text-sm"></label>
    <input type="text" id="plus-one-name" name="plus-one-name" class="border-2 border-amber-600 bg-amber-200 p-2 rounded-md text-amber-900 focus:border-amber-500 focus:bg-amber-600 focus:ring-amber-500 hover:border-amber-500" required />
    <label for="plus-one-email" i18n-key="rsvpForm.email" class="text-amber-900 font-serif lg:text-lg text-sm"></label>
    <input type="email" id="plus-one-email" name="plus-one-email" class="border-2 border-amber-600 bg-amber-200 p-2 rounded-md text-amber-900 focus:border-amber-500 focus:bg-amber-600 focus:ring-amber-500 hover:border-amber-500" required />
    <div class="flex space-x-4 justify-center items-center">
      <input type="radio" id="plus-one-attending-yes" name="plus-one-attending" value="yes" class="border-amber-600 bg-amber-500 text-lime-500 focus:ring-lime-700 focus:ring-2 focus:ring-amber-500 hover:border-amber-500" required />
      <label i18n-key="rsvpForm.plusOneAttendingYes" class="text-amber-900 p-0 m-0 lg:text-lg text-sm"></label>
      <input type="radio" id="plus-one-attending-no" name="plus-one-attending" value="no" class="border-amber-600 bg-amber-500 text-lime-500 focus:ring-lime-700 focus:ring-2 focus:ring-amber-500 hover:border-amber-500" required />
      <label i18n-key="rsvpForm.plusOneAttendingNo" class="text-amber-900 lg:text-lg text-sm"></label>
    </div>
  `;
}

modalContent += `
    <div class="border-2 border-b w-full border-amber-950 my-4"></div>
    <label for="invited-by" i18n-key="rsvpForm.invitedBy" class="text-amber-900 font-serif lg:text-lg text-sm"></label>
    <select id="invited-by" name="invited-by" class="border-2 border-amber-600 bg-amber-200 p-2 w-36 rounded-md text-amber-900 focus:border-amber-500 focus:bg-amber-600 focus:ring-amber-500 hover:border-amber-500" required>
      <option value="sheyla">Sheyla</option>
      <option value="malcom">Malcom</option>
    </select>
    <button type="submit" i18n-key="rsvpForm.submit" class="border-2 border-amber-600 bg-amber-200 h-8 w-24 rounded-full text-amber-900 hover:bg-amber-600 hover:border-amber-500"></button>
  </form>
`;

const submissionContentPositive = `
  <div class="flex flex-col space-y-4 pt-4 justify-center text-amber-900 font-serif">
    <p i18n-key="rsvpForm.positiveSubmission" class="text-amber-900 font-serif lg:text-2xl text-base font-semibold"></p>
    <p i18n-key="rsvpForm.positiveSubmissionContent" class="text-sm"></p>
    <div class="border-1 border-b border-amber-600 bg-lime-800 py-1"></div>
  </div>
`;

const submissionContentNegative = `
  <div class="flex flex-col space-y-4 pt-4 justify-center text-amber-900 font-serif">
    <p i18n-key="rsvpForm.negativeSubmission" class="text-amber-900 font-serif lg:text-2xl text-base font-semibold"></p>
    <div class="border-1 border-b border-amber-600 bg-lime-800 py-1"></div>
  </div>
`;

const dressCode = `
  <div class="flex flex-col space-y-4 pt-4 justify-center items-center text-amber-900 font-serif">
    <a href="#dress-code">
      <button i18n-key="dressCode" class="close-modal py-4 rounded-md border-4 shadow-md px-2 border-amber-800 bg-amber-100 text-amber-950 w-72 uppercase font-black font-serif hover:text-amber-800" lg:text-xl text-sm"></button>
    </a>
  </div>
`;

const additionalContent = `
  <div class="flex flex-col space-y-4 pt-4 justify-center items-center text-amber-900 font-serif">
    <a href="#gift-lists">
      <button i18n-key="nav.giftLists" class="close-modal py-4 rounded-md border-4 shadow-md px-2 border-amber-800 bg-amber-100 text-amber-950 w-72 uppercase font-black font-serif hover:text-amber-800" lg:text-xl text-sm></button>
    </a>
  </div>
`;

const rsvpModal = document.createElement("div");
rsvpModal.className =
  "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center";
rsvpModal.innerHTML = `
  <div class="relative bg-amber-100 w-full max-w-lg p-4 rounded-lg shadow-md font-serif border border-amber-400">
    <div class="flex absolute pt-2 items-center rounded-full fixed lg:left-[12rem] left-32 top-[-2rem] w-32 h-32 bg-amber-950 border-amber-700 font-logo border z-50">
      <p class="py-4 px-2 text-amber-50 text-4xl">M&S</p>
    </div>
    <div class="flex justify-end">
      <button class="close-modal text-amber-50 rounded-full border w-10 h-10 mb-2 bg-amber-950 border-amber-700 shadow-md text-3xl">&times;</button>
    </div>
    <div id="modal-content" class="border-2 border-amber-400 bg-amber-200 relative p-4 rounded-lg">
      ${modalContent}
    </div>
  </div>
`;

const closeModalButtons = document.querySelectorAll(".close-modal");

closeModalButtons.forEach((closeModal) => {
  closeModal.addEventListener("click", () => {
    rsvpModal.remove();
  });
});

rsvpModal.addEventListener("click", (event) => {
  if (event.target === rsvpModal) {
    rsvpModal.remove();
  }
});

const rsvpForm = rsvpModal.querySelector("#rsvp-form")!;

rsvpForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const isAttending = (
    rsvpForm.querySelector(
      'input[name="attending"]:checked',
    ) as HTMLInputElement
  ).value;

  const name = (rsvpForm.querySelector("#name") as HTMLInputElement).value;
  const email = (rsvpForm.querySelector("#email") as HTMLInputElement).value;
  const invitedBy = (rsvpForm.querySelector("#invited-by") as HTMLSelectElement)
    .value;
  const plusOneName = (
    rsvpForm.querySelector("#plus-one-name") as HTMLInputElement
  )?.value;
  const plusOneEmail = (
    rsvpForm.querySelector("#plus-one-email") as HTMLInputElement
  )?.value;
  const isPlusOneAttending = (
    rsvpForm.querySelector(
      'input[name="plus-one-attending"]:checked',
    ) as HTMLInputElement
  )?.value;
  const source = (
    rsvpForm.querySelector('input[name="source"]') as HTMLInputElement
  ).value;

  let data = {
    name,
    email,
    is_attending: isAttending == "yes",
    invited_by: invitedBy,
    source,
    plus_one_name: plusOneName || "",
    plus_one_email: plusOneEmail || "",
    is_plus_one_attending: isPlusOneAttending == "yes" || false,
  };

  if (stage === "prod") {
    await addToDB(data, "rsvp");
  }

  const modalContentContainer = rsvpModal.querySelector("#modal-content")!;

  if (isAttending === "yes") {
    modalContentContainer.innerHTML = submissionContentPositive;
    modalContentContainer.innerHTML += dressCode;
    modalContentContainer.innerHTML += additionalContent;
  } else {
    modalContentContainer.innerHTML = submissionContentNegative;
    modalContentContainer.innerHTML += additionalContent;
  }

  updateContent();
});

export default rsvpModal;
