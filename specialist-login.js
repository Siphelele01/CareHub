import { auth, db } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    // Show loading state
    message.textContent = "Authenticating...";
    message.className = "";

    // Sign in with email and password
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Check if user exists in specialists collection
    const specialistRef = doc(db, "specialists", user.uid);
    const docSnap = await getDoc(specialistRef);

    if (docSnap.exists()) {
      // User is a registered specialist
      const specialist = docSnap.data();
      message.textContent = `Login successful! Redirecting...`;
      message.className = "success";

      // Store specialist data in session
      sessionStorage.setItem("specialist", JSON.stringify({
        uid: user.uid,
        name: specialist.name,
        email: user.email,
        specialization: specialist.specialization
      }));

      // Redirect to specialist dashboard
      setTimeout(() => {
        window.location.href = "specialist-dashboard.html";
      }, 1500);
    } else {
      // User is not a registered specialist
      await auth.signOut(); // Log them out immediately
      message.textContent = "Access denied. Only registered specialists can login.";
      message.className = "error";
    }
  } catch (error) {
    message.textContent = error.message;
    message.className = "error";
  }
});
