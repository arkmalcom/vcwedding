import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";

async function addRSVP(
  name: string,
  email: string,
  isAttending: boolean,
  invitedBy: string,
  source: string,
  plusOneName?: string,
  plusOneEmail?: string,
  isPlusOneAttending?: boolean,
) {
  let rsvpData = {
    name,
    email,
    is_attending: isAttending,
    invited_by: invitedBy,
    plus_one_name: "",
    plus_one_email: "",
    is_plus_one_attending: false,
    source,
  };

  if (plusOneName && plusOneEmail && isPlusOneAttending !== undefined) {
    rsvpData = {
      ...rsvpData,
      plus_one_name: plusOneName,
      plus_one_email: plusOneEmail,
      is_plus_one_attending: isPlusOneAttending,
    };
  }

  try {
    await addDoc(collection(db, "rsvp"), rsvpData);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}

export { addRSVP };
