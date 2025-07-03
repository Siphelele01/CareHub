import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const specialization = document.getElementById("specialization").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    // Show loading state
    message.textContent = "Creating account...";
    message.className = "";

    // Create user account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Create specialist document in Firestore
    await setDoc(doc(db, "specialists", user.uid), {
      name: name,
      specialization: specialization,
      email: email,
      createdAt: new Date(),
      isApproved: false // Admin can approve later if needed
    });

    message.textContent = "Registration successful! You can now login.";
    message.className = "success";
    form.reset();

    // Optional: Auto-login after registration
    window.location.href = "specialist-login.html";
  } catch (error) {
    message.textContent = error.message;
    message.className = "error";
  }
});
