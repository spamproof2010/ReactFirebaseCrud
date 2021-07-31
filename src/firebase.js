import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBDXz67XiNIuXdbwte4EJ5hsIHsh7HI5TU",
  authDomain: "reactcrud2-4afb6.firebaseapp.com",
  databaseURL: "https://reactcrud2-4afb6-default-rtdb.firebaseio.com",
  projectId: "reactcrud2-4afb6",
  storageBucket: "reactcrud2-4afb6.appspot.com",
  messagingSenderId: "858779729682",
  appId: "1:858779729682:web:978c1f0a30589477ca3dcb"
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();