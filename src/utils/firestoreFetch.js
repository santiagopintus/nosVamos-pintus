import { query, orderBy, collection, getDocs, where } from '@firebase/firestore';
import db from './firebaseConfig';


const firestoreFetch = async (categoryId) => {
    let q;
    if (categoryId) {
        q = query(collection(db, "products"), where("category", "==", categoryId));
    } else {
        q = query(collection(db, "products"), orderBy("title"));
    }
    const querySnapshot = await getDocs(q);
    const productsArray = querySnapshot.docs.map(doc => (
        {
            id: doc.id,
            ...doc.data()
        }
    ));
    return productsArray;
}

export default firestoreFetch;