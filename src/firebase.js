import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAPX9V3AH4d9kusR1F8fJYVHXwb-1PNRpg",
  authDomain: "clone-3be1c.firebaseapp.com",
  projectId: "clone-3be1c",
  storageBucket: "clone-3be1c.appspot.com",
  messagingSenderId: "566455056791",
  appId: "1:566455056791:web:bb693d405e535ba2fcecd2",
  measurementId: "G-V4LW5XNZ70",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
