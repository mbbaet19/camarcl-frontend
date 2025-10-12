// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDpm7jcG28MHphYj39WWejv6ZUs_YAwy3w",
  authDomain: "camarcl-plants-and-flower-shop.firebaseapp.com",
  projectId: "camarcl-plants-and-flower-shop",
  storageBucket: "camarcl-plants-and-flower-shop.firebasestorage.app",
  messagingSenderId: "207604228961",
  appId: "1:207604228961:web:ff6d8c4ff4c3bb2d565b20",
  measurementId: "G-J9Y1QSMNBX"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
