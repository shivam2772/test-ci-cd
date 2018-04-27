import * as firebase from 'firebase';
var config = {
   apiKey: "AIzaSyB7jlKj4cckL8UcFCHe0lHBmFl4gWcIFgk",
   authDomain: "trell-16996.firebaseapp.com",
   databaseURL: "https://trell-16996.firebaseio.com",
   projectId: "trell-16996",
   storageBucket: "trell-16996.appspot.com",
   messagingSenderId: "638681303111"
 };
if (!firebase.apps.length)
   firebase.initializeApp(config);
const firebasedb = firebase.database().ref();
export default firebasedb;