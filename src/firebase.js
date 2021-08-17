import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpLWteCiLNO8WOBxnXmHdLOuPY9LWG3yw",
  authDomain: "clone-b50e8.firebaseapp.com",
  projectId: "clone-b50e8",
  storageBucket: "clone-b50e8.appspot.com",
  messagingSenderId: "932400744093",
  appId: "1:932400744093:web:e01d8b2135bcc28c553674",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
