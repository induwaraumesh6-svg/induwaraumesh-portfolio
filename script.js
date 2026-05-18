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
function sendOrder(e){
e.preventDefault();
document.getElementById("msg").innerHTML="✅ Order Submitted Successfully!";
}


function createAccount(e){
e.preventDefault();
document.getElementById("accountmsg").innerHTML =
"✅ Account created successfully!";
}
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

// REGISTER
window.registerUser = async function(email, password){
try{
await createUserWithEmailAndPassword(auth, email, password);
alert("Account Created Successfully!");
}catch(error){
alert(error.message);
}
}

// LOGIN
window.loginUser = async function(email, password){
try{
await signInWithEmailAndPassword(auth, email, password);
alert("Login Successful!");
window.location.href="index.html";
}catch(error){
alert(error.message);
}
}

// LOGOUT
window.logoutUser = async function(){
await signOut(auth);
alert("Logged Out");
}
