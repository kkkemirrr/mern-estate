// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-e1edd.firebaseapp.com",
    projectId: "mern-estate-e1edd",
    storageBucket: "mern-estate-e1edd.appspot.com",
    messagingSenderId: "103108771152",
    appId: "1:103108771152:web:d9c34cc3c998bbf2b34055"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);