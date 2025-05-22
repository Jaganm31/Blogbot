// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

console.log('Firebase API Key:', import.meta.env.VITE_FIREBASE_API_KEY);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7773b.firebaseapp.com",
  projectId: "mern-blog-7773b",
  storageBucket: "mern-blog-7773b.appspot.com",
  messagingSenderId: "1097205302036",
  appId: "1:1097205302036:web:0db1feacd650b29e747801"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
