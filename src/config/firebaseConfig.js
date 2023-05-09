// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIkIXmzC46eD5gBHEUPdh0Yref7d6rg24",
  authDomain: "hasan-dev-9d381.firebaseapp.com",
  projectId: "hasan-dev-9d381",
  storageBucket: "hasan-dev-9d381.appspot.com",
  messagingSenderId: "232428400985",
  appId: "1:232428400985:web:c68746cb1816d3f97edc48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//inisialisasi storage firebase
export const storage = getStorage(app)