// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    updateDoc,
    deleteDoc,
    doc,
    query,
    orderBy,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCv--W3ajF31TibWxWK6HJf1kt09uFhdi8",
    authDomain: "leadsforshonkuwebv1.firebaseapp.com",
    projectId: "leadsforshonkuwebv1",
    storageBucket: "leadsforshonkuwebv1.firebasestorage.app",
    messagingSenderId: "233727243136",
    appId: "1:233727243136:web:2eb28a71ee2b1961ecc765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db,
    collection,
    addDoc,
    onSnapshot,
    updateDoc,
    deleteDoc,
    doc,
    query,
    orderBy,
    serverTimestamp
};
