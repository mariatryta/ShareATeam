import firebase from 'firebase';
import 'firebase/firestore';

// firebase init goes here
const config = {
  apiKey: "AIzaSyD4sWpOTJsx1Jv7OhX2WddHOk-7JJKr4l0",
  authDomain: "teamshare-245f8.firebaseapp.com",
  databaseURL: "https://teamshare-245f8.firebaseio.com",
  projectId: "teamshare-245f8",
  storageBucket: "teamshare-245f8.appspot.com",
  messagingSenderId: "384162586894"
};
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

export {
    db,
    auth,
    currentUser,
}