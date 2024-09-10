// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyglXh3O8ExIPgm1SFEDeaoK1KTHjvwls",
  authDomain: "netflix-gpt-30244.firebaseapp.com",
  projectId: "netflix-gpt-30244",
  storageBucket: "netflix-gpt-30244.appspot.com",
  messagingSenderId: "262231550881",
  appId: "1:262231550881:web:c01b906cd4ce2a8d1b39e0",
  measurementId: "G-DYPGZBJ4CJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();