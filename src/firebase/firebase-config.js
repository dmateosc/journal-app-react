import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyBy3YRXdSJ5FmOsccljRX8Ye8VMLQIl1cs",
    authDomain: "journal-app-ac0a8.firebaseapp.com",
    projectId: "journal-app-ac0a8",
    storageBucket: "journal-app-ac0a8.appspot.com",
    messagingSenderId: "564057669657",
    appId: "1:564057669657:web:5e461f464163c50e06aa88",
    measurementId: "G-5Y2KEHERKB"
  };

  firebase.initializeApp(firebaseConfig)


  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


  export {
    db,
    googleAuthProvider,
    firebase

  }