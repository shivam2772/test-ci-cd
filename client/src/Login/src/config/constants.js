import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCba3Oq0fWB5iVe-cpRvPb12Ii4TPaC9vQ",
    authDomain: "stackroutetrello.firebaseapp.com",
    databaseURL: "https://stackroutetrello.firebaseio.com",
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
