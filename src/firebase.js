
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLnqFiN_LCXvDs9gworu1CTj0SWmNgV0E",
  authDomain: "enneagram-app-v2.firebaseapp.com",
  projectId: "enneagram-app-v2",
  storageBucket: "enneagram-app-v2.firebasestorage.app",
  messagingSenderId: "916994728666",
  appId: "1:916994728666:web:5e7ed48d54e78bf1a23be3",
  measurementId: "G-D1C5FEK46Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
