import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDKL--63JNYCueNBzQhzaCGJ5RqWzy_YZw",
    authDomain: "frontix-ff014.firebaseapp.com",
    projectId: "frontix-ff014",
    storageBucket: "frontix-ff014.appspot.com",
    messagingSenderId: "1025458872034",
    appId: "1:1025458872034:web:bf837dcd4e5408898588bb",
    measurementId: "G-ZKECD54KD6"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const firebaseDb = {
  db,
  storage,
  auth,
};

export default firebaseDb;