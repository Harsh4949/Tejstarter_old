import { getDatabase, ref, get, set, update, remove } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";

// Your Firebase configuration (as you provided)
const firebaseConfig = {
  apiKey: "AIzaSyB_J53IJwR3z2IXmufvkLWLsNpUtcY7-3E",
  authDomain: "tejstarter-afd20.firebaseapp.com",
  projectId: "tejstarter-afd20",
  storageBucket: "tejstarter-afd20.firebasestorage.app",
  messagingSenderId: "879237123522",
  appId: "1:879237123522:web:2a6ff1c2a7f7e6c1b99a5b",
  measurementId: "G-58ESH0LEPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("hello");