import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

let firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

if (process.env.NODE_ENV === "test") {
  firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY_TEST,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN_TEST,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID_TEST,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET_TEST,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID_TEST,
    appId: process.env.REACT_APP_FIREBASE_APPID_TEST,
  };
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export { app, db, googleAuthProvider };
