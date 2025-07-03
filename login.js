// login.js
import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const loginForm = document.getElementById("loginForm");
const messageEl = document.getElementById("loginMessage");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    messageEl.textContent = `Welcome, ${user.displayName || 'User'}!`;
    loginForm.reset();
    // Redirect to dashboard or homepage
    window.location.href = "dashboard.html";
  } catch (error) {
    messageEl.textContent = error.message;
  }
});
