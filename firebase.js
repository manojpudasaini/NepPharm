import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDxR7a7bx47Z4Ugd4WmtTjJ2mbrFlbYgBg",
    authDomain: "neppharm.firebaseapp.com",
    projectId: "neppharm",
    storageBucket: "neppharm.appspot.com",
    messagingSenderId: "1056858012343",
    appId: "1:1056858012343:web:5d8b68081137236768ab32",
    measurementId: "G-ZSZ903P6SS"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }