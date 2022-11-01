// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCihR9KueLv4JQENH_YZ4Ff6CnP6nIt_vw",
  authDomain: "my-recipe-app-42a93.firebaseapp.com",
  databaseURL: "https://my-recipe-app-42a93-default-rtdb.firebaseio.com",
  projectId: "my-recipe-app-42a93",
  storageBucket: "my-recipe-app-42a93.appspot.com",
  messagingSenderId: "558287808741",
  appId: "1:558287808741:web:be83c6a09d1fc9731e4c0c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage}