// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsP4Y5VsEvzkQweKCDxZz8We8jsC4sseE",
  authDomain: "validacion-login-18d30.firebaseapp.com",
  projectId: "validacion-login-18d30",
  storageBucket: "validacion-login-18d30.appspot.com",
  messagingSenderId: "227023691720",
  appId: "1:227023691720:web:df98737810b3d4bc3daafd",
  measurementId: "G-GC207X2S2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const analytics = getAnalytics(app);