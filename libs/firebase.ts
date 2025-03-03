// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8ThBauITQV4q1cHvZVtdJwq2KZaKr2aQ",
  authDomain: "shop-dc159.firebaseapp.com",
  projectId: "shop-dc159",
  storageBucket: "shop-dc159.firebasestorage.app",
  messagingSenderId: "1058443759805",
  appId: "1:1058443759805:web:805a91ca141cb437ea67d4",
  measurementId: "G-J3MHM3TZE2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
 
export default firebaseApp