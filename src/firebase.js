// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb3P7dhoaGZS2c9S5W8Qps7dgSl1X_EZA",
  authDomain: "whatsapp-clone-webapp-76ed0.firebaseapp.com",
  projectId: "whatsapp-clone-webapp-76ed0",
  storageBucket: "whatsapp-clone-webapp-76ed0.appspot.com",
  messagingSenderId: "676264726295",
  appId: "1:676264726295:web:341d0615cdf972a0813152",
  measurementId: "G-480TXEJBZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);