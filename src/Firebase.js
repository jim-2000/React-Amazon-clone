// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBIKpSpNmDtjK-H6qOVewpqFHqoXiriB5Y",
  authDomain: "jimzon-ecommerce.firebaseapp.com",
  databaseURL: "https://jimzon-ecommerce.firebaseio.com",
  projectId: "jimzon-ecommerce",
  storageBucket: "jimzon-ecommerce.appspot.com",
  messagingSenderId: "949921675936",
  appId: "1:949921675936:web:6328682e1ac94d5cb8a7c5",
  measurementId: "G-78JGM0M8BX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth }



//Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
