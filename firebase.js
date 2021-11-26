// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC2vuwyaHjfGwD4mF-GivpUgwvs1BFFQQ",
  authDomain: "instagram-clone-next-tailwind.firebaseapp.com",
  projectId: "instagram-clone-next-tailwind",
  storageBucket: "instagram-clone-next-tailwind.appspot.com",
  messagingSenderId: "916974153689",
  appId: "1:916974153689:web:2a12a2eccd26834d23f3c8",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
