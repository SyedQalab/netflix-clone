import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA07VMzDCoWHojhezPuGrSFfI9eQSddj8M",
  authDomain: "netflix-clone-6ba42.firebaseapp.com",
  projectId: "netflix-clone-6ba42",
  storageBucket: "netflix-clone-6ba42.appspot.com",
  messagingSenderId: "791782646468",
  appId: "1:791782646468:web:cfcac7da0ca63febef9f91",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
