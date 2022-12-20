// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6iRA0VNoErvtF1u5vfylISwbKF1w66Lc",
  authDomain: "chitchat-943e3.firebaseapp.com",
  projectId: "chitchat-943e3",
  storageBucket: "chitchat-943e3.appspot.com",
  messagingSenderId: "951072838667",
  appId: "1:951072838667:web:1558f12f6948c94299e30e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
