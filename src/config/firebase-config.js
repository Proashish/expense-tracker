// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT7JCCOiBzGH8P4tY3woppupVkBHP7M7w",
  authDomain: "expense-tracker-235bc.firebaseapp.com",
  projectId: "expense-tracker-235bc",
  storageBucket: "expense-tracker-235bc.appspot.com",
  messagingSenderId: "391829129533",
  appId: "1:391829129533:web:5e5cb7033ac99740a91d54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const db =getFirestore(app);



//firebase login
//firebase init
//firebase deploy