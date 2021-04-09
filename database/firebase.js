import firebase from "firebase";

import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBMBP9BaFCxFkwysBXVLGsPlPCg9KCHqJQ",
  authDomain: "react-native-firebase-26850.firebaseapp.com",
  databaseURL: "https://react-native-firebase-26850.firebaseio.com",
  projectId: "react-native-firebase-26850",
  storageBucket: "react-native-firebase-26850.appspot.com",
  messagingSenderId: "535625405386",
  appId: "1:535625405386:web:e3bf26801b105c12373533",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default {
  firebase,
  db,
};
