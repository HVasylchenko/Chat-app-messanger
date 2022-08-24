// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0_u4iVIkC8-vKh1RT6T0DHfrJpYekDWk",
  authDomain: "my-project-23107.firebaseapp.com",
  projectId: "my-project-23107",
  storageBucket: "my-project-23107.appspot.com",
  messagingSenderId: "960998551756",
  appId: "1:960998551756:web:67395d52602c2ab5ab9269",
  measurementId: "G-735W8C3JRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
