import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCba3Oq0fWB5iVe-cpRvPb12Ii4TPaC9vQ",
    authDomain: "stackroutetrello.firebaseapp.com",
    databaseURL: "https://stackroutetrello.firebaseio.com",
    projectId: "stackroutetrello",
    storageBucket: "",
    messagingSenderId: "13912144222"
};
if (!firebase.apps.length)
    firebase.initializeApp(config);
const firebasedb = firebase.database().ref();
export default firebasedb;