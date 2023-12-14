// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTC03YAi_nDwA1CaZWZRACtLdcRpuC9D8",
  authDomain: "netflix-a9abd.firebaseapp.com",
  projectId: "netflix-a9abd",
  storageBucket: "netflix-a9abd.appspot.com",
  messagingSenderId: "20378348794",
  appId: "1:20378348794:web:cf79037156c46b66f76d43",
  measurementId: "G-VYX0DSJMFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();