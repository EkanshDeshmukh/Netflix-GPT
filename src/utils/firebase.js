// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGrrjFypNfB_0gmPZrmpV0QowfAfZPwVg",
    authDomain: "ne tflixgpt-f4def.firebaseapp.com",
    projectId: "netflixgpt-f4def",
    storageBucket: "netflixgpt-f4def.appspot.com",
    messagingSenderId: "79828412740",
    appId: "1:79828412740:web:53263852de0ae7ba234f11",
    measurementId: "G-9SNSL1JB2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = getAuth();