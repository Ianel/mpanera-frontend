// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkC3NkfGjT152kYp1ZzL_es9atvCLoGTk",
  authDomain: "mpanera-3f72b.firebaseapp.com",
  projectId: "mpanera-3f72b",
  storageBucket: "mpanera-3f72b.appspot.com",
  messagingSenderId: "1046681746134",
  appId: "1:1046681746134:web:d62ca6421935251fb46777",
  measurementId: "G-7WCKK67VVL",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const auth = firebaseApp.auth();

export { auth, firebaseApp };
