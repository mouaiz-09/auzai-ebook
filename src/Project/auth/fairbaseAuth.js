// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN3fecJenxgFIvwDD29SaMbRIa2PPxFUg",
  authDomain: "auzai-ebook-v1.firebaseapp.com",
  projectId: "auzai-ebook-v1",
  storageBucket: "auzai-ebook-v1.firebasestorage.app",
  messagingSenderId: "568301135658",
  appId: "1:568301135658:web:aae672c0e163009abce053",
  measurementId: "G-YF20PQDR49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { analytics };
