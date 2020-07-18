import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVjfP1gMLbCM08INQm74wE2mvg4TjQT_4",
  authDomain: "recepies-example.firebaseapp.com",
  databaseURL: "https://recepies-example.firebaseio.com",
  projectId: "recepies-example",
  storageBucket: "recepies-example.appspot.com",
  messagingSenderId: "702637937796",
  appId: "1:702637937796:web:77417723150175cd8b9ed1",
};

export default firebase.initializeApp(firebaseConfig);
