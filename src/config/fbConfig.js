import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAes575vJ9Fli5fESInB7-QvDlrXbpkT44",
  authDomain: "gen-ukraine-react.firebaseapp.com",
  databaseURL: "https://gen-ukraine-react.firebaseio.com",
  projectId: "gen-ukraine-react",
  storageBucket: "",
  messagingSenderId: "681289228854",
  appId: "1:681289228854:web:c7968d5d69ae2951"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;