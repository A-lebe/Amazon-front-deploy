// we're importing the core Firebase library, as well as the
// functions for authentication and the Firestore database
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration for the Firebase project you created in the Firebase console
const firebaseConfig = {
 apiKey: "AIzaSyCwftWWpLokbFevXeC1T4ptryyRjRk6pX8",
  authDomain: "clone-8e84f.firebaseapp.com",
  projectId: "clone-8e84f",
  storageBucket: "clone-8e84f.firebasestorage.app",
  messagingSenderId: "591517696073",
  appId: "1:591517696073:web:6d0a13dea59f9d08c43f98",
  measurementId: "G-Q9XP4N3TRJ"
};

// Initialize the Firebase app. This creates a new instance of the Firebase app, which is the entry point for all  Firebase functionality
const app = firebase.initializeApp(firebaseConfig);

// Get the authentication service for signing in and out of your app
export const auth = getAuth(app);

// Get the Firestore database for storing and retrieving data
export const db = app.firestore();
