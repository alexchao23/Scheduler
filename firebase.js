import firebase from "firebase/app";
import "firebase/database";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDMtv3czkS_xHpFIf_oyIvAEop8EWDGuZ4",
  authDomain: "scheduler-8d074.firebaseapp.com",
  databaseURL: "https://scheduler-8d074-default-rtdb.firebaseio.com",
  projectId: "scheduler-8d074",
  storageBucket: "scheduler-8d074.appspot.com",
  messagingSenderId: "21301570514",
  appId: "1:21301570514:web:70fd6fa6500e998559f60b",
  measurementId: "G-1V09LVC10P"
};

firebase.initializeApp(firebaseConfig);
//firebase.auth().signInWithEmailAndPassword(email, password);
//firebase.auth().createUserWithEmailAndPassword(email, password);

export { firebase };