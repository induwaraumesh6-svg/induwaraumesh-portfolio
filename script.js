// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC1xJ34Gx5xZGbFCIGOWjhjwMCfKTNPgVk",
  authDomain: "induwaraportfolio-d8d82.firebaseapp.com",
  projectId: "induwaraportfolio-d8d82",
  storageBucket: "induwaraportfolio-d8d82.firebasestorage.app",
  messagingSenderId: "72123389540",
  appId: "1:72123389540:web:f395f661a90d9cf00df589",
  measurementId: "G-J5V705HEV2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// LOGIN FUNCTION
window.handleLogin = async function(event){

  event.preventDefault();

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  try{

    const userCredential =
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    alert("Login Successful!");

    window.location.href = "index.html";

  }catch(error){

    alert(error.message);

    console.log(error);

  }

}
