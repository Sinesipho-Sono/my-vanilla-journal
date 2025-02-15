import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { auth, signOut } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "journal.html";
  } catch (error) {
    alert(error.message);
  }
});

document.getElementById("google-signin").addEventListener("click", async () => {
  let provider = new GoogleAuthProvider();

  try {
    let result = await signInWithPopup(auth, provider);
    let user = result.user;
    console.log("User signed in: ", user);
    window.location.href = "journal.html";
  } catch (error) {
    console.error("Error signing in with Google: ", error.message);
  }
});
