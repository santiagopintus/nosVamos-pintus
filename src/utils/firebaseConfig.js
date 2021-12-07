// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEEI6vU_x3y_G8iwIJulejnrPnq7Nw3ck",
  authDomain: "rajanding-reactjs.firebaseapp.com",
  projectId: "rajanding-reactjs",
  storageBucket: "rajanding-reactjs.appspot.com",
  messagingSenderId: "1026965930799",
  appId: "1:1026965930799:web:c7801132bb660248f8d7da",
  measurementId: "G-J9KZNYW2JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;