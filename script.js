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

// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ORDER FORM
function sendOrder(e){
  e.preventDefault();
  document.getElementById("msg").innerHTML =
  "✅ Order Submitted Successfully!";
}

// CREATE ACCOUNT MESSAGE
function createAccount(e){
  e.preventDefault();
  document.getElementById("accountmsg").innerHTML =
  "✅ Account created successfully!";
}

// REGISTER
window.registerUser = async function(email, password){
  try{

    await createUserWithEmailAndPassword(auth, email, password);

    alert("Account Created Successfully!");

    // Register success -> Login page
    window.location.href = "login.html";

  }catch(error){
    alert(error.message);
  }
}

// LOGIN
window.loginUser = async function(email, password){

  try{

    await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful!");

    // Login success -> Profile page
    window.location.href = "profile.html";

  }catch(error){
    alert(error.message);
  }
}

// LOGOUT
window.logoutUser = async function(){

  await signOut(auth);

  alert("Logged Out");

  window.location.href = "index.html";
}

// HANDLE REGISTER FORM
window.handleRegister = async function(event){

  event.preventDefault();

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  const confirmPassword =
  document.getElementById("confirmPassword").value;

  if(password !== confirmPassword){

    alert("Passwords do not match!");

    return;
  }

  registerUser(email, password);
}

// HANDLE LOGIN FORM
window.handleLogin = async function(event){

  event.preventDefault();

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  loginUser(email, password);
}
