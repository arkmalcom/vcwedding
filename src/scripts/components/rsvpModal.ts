import { updateContent } from "../i18n/updateContent";
import { getInviteTypeFromURL } from "../utils/inviteType";
import { addRSVP } from "../utils/dbOperations";

const inviteType = getInviteTypeFromURL();

let modalContent = `
  <form id="rsvp-form" class="flex flex-col space-y-1">
    <label for="name" i18n-key="rsvpForm.name" class="text-amber-50 font-stylized text-2xl"></label>
    <input type="text" id="name" name="name" class="border-2 border-emerald-950 bg-emerald-700 p-2 rounded-md text-amber-50 focus:border-emerald-500 focus:bg-emerald-600 focus:ring-emerald-600 hover:border-emerald-500" required />
    <label for="email" i18n-key="rsvpForm.email" class="text-amber-50 font-stylized text-2xl"></label>
    <input type="email" id="email" name="email" class="border-2 border-emerald-950 bg-emerald-700 p-2 rounded-md text-amber-50 focus:border-emerald-500 focus:bg-emerald-600 focus:ring-emerald-600 hover:border-emerald-500" required />
    <div class="flex space-x-4 justify-center items-center">
      <input type="radio" id="attending-yes" name="attending" value="yes" class="border-emerald-950 bg-emerald-500 text-emerald-500 focus:ring-emerald-700 focus:ring-2 focus:ring-emerald-600 hover:border-emerald-500" required />
      <label i18n-key="rsvpForm.attendingYes" class="text-amber-50 p-0 m-0"></label>
      <input type="radio" id="attending-no" name="attending" value="no" class="border-emerald-950 bg-emerald-500 text-emerald-500 focus:ring-emerald-700 focus:ring-2 focus:ring-emerald-600 hover:border-emerald-500" required />
      <label id="attending-no-label" i18n-key="rsvpForm.attendingNo" class="text-amber-50"></label>
    </div>
`;

if (inviteType === "plus-one") {
  modalContent += `
    <div class="border-1 border-t border-emerald-950 bg-emerald-800 py-1"></div>
    <p i18n-key="rsvpForm.plusOne" class="text-amber-50 font-stylized text-2xl"></p>
    <label for="plus-one-name" i18n-key="rsvpForm.name" class="text-amber-50 font-stylized text-2xl"></label>
    <input type="text" id="plus-one-name" name="plus-one-name" class="border-2 border-emerald-950 bg-emerald-700 p-2 rounded-md text-amber-50 focus:border-emerald-500 focus:bg-emerald-600 focus:ring-emerald-600 hover:border-emerald-500" required />
    <label for="plus-one-email" i18n-key="rsvpForm.email" class="text-amber-50 font-stylized text-2xl"></label>
    <input type="email" id="plus-one-email" name="plus-one-email" class="border-2 border-emerald-950 bg-emerald-700 p-2 rounded-md text-amber-50 focus:border-emerald-500 focus:bg-emerald-600 focus:ring-emerald-600 hover:border-emerald-500" required />
    <div class="flex space-x-4 justify-center items-center">
      <input type="radio" id="plus-one-attending-yes" name="plus-one-attending" value="yes" class="border-emerald-950 bg-emerald-500 text-emerald-500 focus:ring-emerald-700 focus:ring-2 focus:ring-emerald-600 hover:border-emerald-500" required />
      <label i18n-key="rsvpForm.attendingYes" class="text-amber-50 p-0 m-0"></label>
      <input type="radio" id="plus-one-attending-no" name="plus-one-attending" value="no" class="border-emerald-950 bg-emerald-500 text-emerald-500 focus:ring-emerald-700 focus:ring-2 focus:ring-emerald-600 hover:border-emerald-500" required />
      <label i18n-key="rsvpForm.attendingNo" class="text-amber-50"></label>
    </div>
  `;
}

modalContent += `
    <div class="border-1 border-t border-emerald-950 bg-emerald-800 py-1"></div>
    <label for="invited-by" i18n-key="rsvpForm.invitedBy" class="text-amber-50 font-stylized text-2xl"></label>
    <select id="invited-by" name="invited-by" class="border-2 border-emerald-950 bg-emerald-700 p-2 rounded-md text-amber-50 focus:border-emerald-500 focus:bg-emerald-600 focus:ring-emerald-600 hover:border-emerald-500" required>
      <option value="sheyla">Sheyla</option>
      <option value="malcom">Malcom</option>
    </select>
    <button type="submit" class="border-2 border-emerald-950 bg-emerald-700 p-2 rounded-md text-amber-50 hover:bg-emerald-600 hover:border-emerald-500">Submit</button>
  </form>
`;

const submissionContentPositive = `
  <div class="flex flex-col space-y-4 pt-4 justify-center text-amber-50 font-serif">
    <p i18n-key="rsvpForm.positiveSubmission" class="text-amber-50 font-serif lg:text-2xl text-base font-semibold"></p>
    <p i18n-key="rsvpForm.positiveSubmissionContent" class="text-sm"></p>
  </div>
`;

const submissionContentNegative = `
  <div class="flex flex-col space-y-4 pt-4 justify-center text-amber-50 font-serif">
    <p i18n-key="rsvpForm.negativeSubmission" class="text-amber-50 font-serif lg:text-2xl text-base font-semibold"></p>
  </div>
`;

const rsvpModal = document.createElement("div");
rsvpModal.className =
  "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center";
rsvpModal.innerHTML = `
  <div class="relative bg-emerald-950 w-full max-w-lg p-4 rounded-lg shadow-md font-serif border border-emerald-700">
    <div class="flex absolute pt-2 items-center rounded-full fixed lg:left-[12rem] left-32 top-[-2rem] w-32 h-32 bg-amber-950 border-amber-700 font-logo border z-50">
      <p class="py-4 px-2 text-amber-50 text-4xl">M&S</p>
    </div>
    <div class="flex justify-end">
      <button id="close-modal" class="text-amber-50 rounded-full border w-10 h-10 mb-2 bg-amber-950 border-amber-700 shadow-md text-3xl">&times;</button>
    </div>
    <div id="modal-content" class="border-2 border-emerald-700 bg-emerald-800 relative p-4 rounded-lg">
      ${modalContent}
    </div>
  </div>
`;

const closeModal = rsvpModal.querySelector("#close-modal")!;

closeModal.addEventListener("click", () => {
  rsvpModal.remove();
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

  await addRSVP(
    name,
    email,
    isAttending === "yes",
    invitedBy,
    plusOneName,
    plusOneEmail,
    isPlusOneAttending === "yes",
  );

  const modalContentContainer = rsvpModal.querySelector("#modal-content")!;

  if (isAttending === "yes") {
    modalContentContainer.innerHTML = submissionContentPositive;
  } else {
    modalContentContainer.innerHTML = submissionContentNegative;
  }

  updateContent();
});

export default rsvpModal;
