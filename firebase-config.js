import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getFunctions } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-functions.js";

const firebaseConfig = {
  apiKey: "AIzaSyB2ZHgJFXQErQvGNz8CsWmmVokMkkdIk8g",
  authDomain: "health-solution-4f8c1.firebaseapp.com",
  projectId: "health-solution-4f8c1",
  storageBucket: "health-solution-4f8c1.appspot.com",
  messagingSenderId: "48722449078",
  appId: "1:48722449078:web:78771cf1f278fc11068c17"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };
