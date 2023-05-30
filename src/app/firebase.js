import * as firebase from "firebase/app";
import  "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
//import { firebase } from 'firebase/compat/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_die26Z4JrA5LPriPHOAWVErMU5wbVZY",
    authDomain: "lifehack2023-workjoy.firebaseapp.com",
    projectId: "lifehack2023-workjoy",
    storageBucket: "lifehack2023-workjoy.appspot.com",
    messagingSenderId: "1051980878112",
    appId: "1:1051980878112:web:b2ba4189421f7edb1dc745",
    measurementId: "G-1RXCH3C6FX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebaseApp;