// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "carhive-28deb.firebaseapp.com",
  projectId: "carhive-28deb",
  storageBucket: "carhive-28deb.appspot.com",
  messagingSenderId: "760006051810",
  appId: "1:760006051810:web:241cbea32d7eab4a8c9bbb",
  measurementId: "G-BS9FD4ZR2Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the DB Storage with created app:carhive config to access the firebase: carhive project --> db
export const storage = getStorage(app);
