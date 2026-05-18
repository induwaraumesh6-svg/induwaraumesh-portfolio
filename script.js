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
