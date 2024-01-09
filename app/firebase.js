// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC9nWtMgzZXp7t30Gq2FUOxNGRBU7F-Vo",
  authDomain: "final-year-c4a1e.firebaseapp.com",
  projectId: "final-year-c4a1e",
  storageBucket: "final-year-c4a1e.appspot.com",
  messagingSenderId: "1048103153443",
  appId: "1:1048103153443:web:7986b7142f1f0fa7c06696",
  measurementId: "G-12L2H4BTNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);