// register.js
import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const registerForm = document.getElementById("registerForm");
const messageEl = document.getElementById("regMessage");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("regName").value;
  const surname = document.getElementById("regSurname").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, {
      displayName: `${name} ${surname}`
    });
    messageEl.textContent = "Registered successfully! Please login.";
    registerForm.reset();
  } catch (error) {
    messageEl.textContent = error.message;
  }
});
