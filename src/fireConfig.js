
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDsXHgpMBd7tqk4xee9NP3zXhz4ICBot2E",
  authDomain: "eshop-da258.firebaseapp.com",
  projectId: "eshop-da258",
  storageBucket: "eshop-da258.appspot.com",
  messagingSenderId: "1090875167698",
  appId: "1:1090875167698:web:3a104a074d623aba296e0b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;