// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3B5WiEG56oJL4KovnXQexIHYMG9UBOmU",
  authDomain: "myreact-app-3ec06.firebaseapp.com",
  projectId: "myreact-app-3ec06",
  storageBucket: "myreact-app-3ec06.appspot.com",
  messagingSenderId: "26813866749",
  appId: "1:26813866749:web:ab5e44b80d8d1cab9f1494"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const databaseStore = getFirestore(app)