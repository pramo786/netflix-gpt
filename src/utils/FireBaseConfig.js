// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATHFSOzU_CVXd0fUfGQjBEOdC8gBwi26E",
  authDomain: "netflix-gpt-9ebdf.firebaseapp.com",
  projectId: "netflix-gpt-9ebdf",
  storageBucket: "netflix-gpt-9ebdf.appspot.com",
  messagingSenderId: "1017203209254",
  appId: "1:1017203209254:web:90f37c85b0b96c3948a2e7",
  measurementId: "G-CVGC82MNY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)