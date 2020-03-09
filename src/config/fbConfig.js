 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDWuq-XVu6mruA4yJTsZcvWrIDB0_8CYq4",
    authDomain: "net-ninja-ayosplan.firebaseapp.com",
    databaseURL: "https://net-ninja-ayosplan.firebaseio.com",
    projectId: "net-ninja-ayosplan",
    storageBucket: "net-ninja-ayosplan.appspot.com",
    messagingSenderId: "809634343976",
    appId: "1:809634343976:web:e30449e8635d3d33f0991d",
    measurementId: "G-LPZMNDZKR2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase;