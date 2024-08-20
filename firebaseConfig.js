// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJKMRimQIeqU2_8C1jY6cqCko2NGGE470",
  authDomain: "student-management-syste-9178f.firebaseapp.com",
  projectId: "student-management-syste-9178f",
  storageBucket: "student-management-syste-9178f.appspot.com",
  messagingSenderId: "387950072613",
  appId: "1:387950072613:web:eb1b98791c2a02049540cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize firestone

const db = getFirestore(app)

export { db }