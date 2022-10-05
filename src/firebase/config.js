import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrdrgUuXdLK4wxk_shko1hG-daFCviS9M",
  authDomain: "imgbookk.firebaseapp.com",
  projectId: "imgbookk",
  storageBucket: "imgbookk.appspot.com",
  messagingSenderId: "909952565386",
  appId: "1:909952565386:web:04d91d9250e7abc31e2d73"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, projectStorage, timestamp};
