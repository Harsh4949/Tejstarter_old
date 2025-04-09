
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

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

  
