import firebase from 'firebase'

var config = {
   apiKey: "AIzaSyAU-EONivUfWWNmzNYXJqeUwZ5vtiJsWrc",
   authDomain: "newagent-147ab.firebaseapp.com",
   databaseURL: "https://newagent-147ab.firebaseio.com",
   projectId: "newagent-147ab",
   storageBucket: "newagent-147ab.appspot.com",
   messagingSenderId: "938795729422"
 };

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
