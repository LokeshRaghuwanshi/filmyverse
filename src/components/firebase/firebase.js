// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg5YcwJrnOo05vCpDqSk61tXSOVm9eJVI",
  authDomain: "filmyverse-7cc58.firebaseapp.com",
  projectId: "filmyverse-7cc58",
  storageBucket: "filmyverse-7cc58.appspot.com",
  messagingSenderId: "992804378732",
  appId: "1:992804378732:web:701e38648bb29a25b1e049"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const moviesRef=collection(db,"movies");
export const reviewsRef=collection(db,"reviews");
export const usersRef=collection(db,"users");

export default app;