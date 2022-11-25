// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC0YjpVR_kKRPHNl6JE6En3i3QP_3AKM8",
  authDomain: "validation-food-delivery.firebaseapp.com",
  projectId: "validation-food-delivery",
  storageBucket: "validation-food-delivery.appspot.com",
  messagingSenderId: "110272778576",
  appId: "1:110272778576:web:4bafefa9ad808883f75c55",
  measurementId: "G-BQM787GE2N"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const dataBase= getFirestore(app);
export const google = new GoogleAuthProvider();

// cloudinary
// dpssc03mq
// upload
// validation-food-delivery

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth'
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCsP4Y5VsEvzkQweKCDxZz8We8jsC4sseE",
//   authDomain: "validacion-login-18d30.firebaseapp.com",
//   projectId: "validacion-login-18d30",
//   storageBucket: "validacion-login-18d30.appspot.com",
//   messagingSenderId: "227023691720",
//   appId: "1:227023691720:web:df98737810b3d4bc3daafd",
//   measurementId: "G-GC207X2S2E"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// // const analytics = getAnalytics(app);