import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";

async function addToDB(
  obj: { [key: string]: string | boolean },
  collectionName: string,
) {
  try {
    await addDoc(collection(db, collectionName), obj);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}

export { addToDB };
