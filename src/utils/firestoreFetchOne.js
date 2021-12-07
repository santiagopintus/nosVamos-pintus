import db from './firebaseConfig';
import { doc, getDoc } from "firebase/firestore";

const firebaseFetchOne = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const item = {
            id: docSnap.id,
            ...docSnap.data()
        }
        console.log(item);
        return item;
    } else {
        // doc.data() will be undefined in this case
        console.log("No se encuentra el documento!");
    }
}

export default firebaseFetchOne;