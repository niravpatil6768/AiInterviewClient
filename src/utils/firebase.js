import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-ea8a3.firebaseapp.com",
  projectId: "interviewiq-ea8a3",
  storageBucket: "interviewiq-ea8a3.firebasestorage.app",
  messagingSenderId: "674654039998",
  appId: "1:674654039998:web:9c56af05d728e6fcf3d3ef",
  measurementId: "G-75F9D813E8",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
