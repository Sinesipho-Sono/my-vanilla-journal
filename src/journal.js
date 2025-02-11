import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html";
  }
});

document.getElementById("logout").addEventListener("click", async () => {
  try {
    await signOut(auth);
    alert("Logged out!");
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error logging out:", error);
  }
});
