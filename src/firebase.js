import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyV_ZWe6VAKF7cEm3affmXHIxDCevDnwk",
  authDomain: "whatsapp-clone-96181.firebaseapp.com",
  projectId: "whatsapp-clone-96181",
  storageBucket: "whatsapp-clone-96181.appspot.com",
  messagingSenderId: "329761402472",
  appId: "1:329761402472:web:d38b73caadda4cff3095dd",
  measurementId: "G-JQ0SEJSHHL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
