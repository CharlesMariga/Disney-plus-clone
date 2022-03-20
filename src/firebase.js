import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbXdvKHNQNhk2TYHJMpewFuxGdxnZpq9o",
  authDomain: "disneyplus-clone-17af5.firebaseapp.com",
  projectId: "disneyplus-clone-17af5",
  storageBucket: "disneyplus-clone-17af5.appspot.com",
  messagingSenderId: "954812888692",
  appId: "1:954812888692:web:fd5675761f5a09993d8321",
  measurementId: "G-XYTGG5ZYR0",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
