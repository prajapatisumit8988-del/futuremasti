<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

export const firebaseConfig = {
  apiKey: "AIzaSyC-tawInUtP03jA7qiiodaR7b0M2wE0f4Y",
  authDomain: "futuremasti.firebaseapp.com",
  databaseURL: "https://futuremasti-default-rtdb.firebaseio.com",
  projectId: "futuremasti",
  storageBucket: "futuremasti.firebasestorage.app",
  messagingSenderId: "768228855414",
  appId: "1:768228855414:web:ef84c4ede75afe20b1d957"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
</script>
