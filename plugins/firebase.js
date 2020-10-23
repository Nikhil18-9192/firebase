import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
  const firebaseConfig = {
    apiKey: "AIzaSyA_RQM9RTRzFiJWxu7WOMoqU3bOjpfuTug",
    authDomain: "store-practice-8031e.firebaseapp.com",
    databaseURL: "https://store-practice-8031e.firebaseio.com",
    projectId: "store-practice-8031e",
    storageBucket: "store-practice-8031e.appspot.com",
    messagingSenderId: "634111952567",
    appId: "1:634111952567:web:f3a4e0e4a55e83a7c2ef32",
    measurementId: "G-VCL34ZN3PG"
  };

  let app = null;
if(!firebase.apps.length){
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

export default firebase