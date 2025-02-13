import { auth } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;

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
