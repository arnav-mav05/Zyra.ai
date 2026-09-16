// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo05vvUIaLzfEbanAQE-71EbmRrbzBYvA",
  authDomain: "zyraai-7629f.firebaseapp.com",
  projectId: "zyraai-7629f",
  storageBucket: "zyraai-7629f.firebasestorage.app",
  messagingSenderId: "340293324021",
  appId: "1:340293324021:web:7bfa57ce3698fd7bd489bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider }; 