
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7QN_cp2Ou55RcgzoNJQEXW10ogjzUIYI",
    authDomain: "enzovet-b8838.firebaseapp.com",
    projectId: "enzovet-b8838",
    storageBucket: "enzovet-b8838.appspot.com",
    messagingSenderId: "981295256253",
    appId: "1:981295256253:web:f7ee7b99f59d563a6c5dd4",
    measurementId: "G-6GLFH1KWZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
