import { auth } from "./firebase-config.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("signup-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      let email = document.getElementById("signup-email").value;
      let password = document.getElementById("signup-password").value;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful!");
        window.location.href = "journal.html";
      } catch (error) {
        alert(error.message);
      }
    });
});
