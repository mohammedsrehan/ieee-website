// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth';        // for authentication

// import 'firebase/initializeApp'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgTqhKpj_0blgEXOAgmwzFAbYRJ8N14LM",
    authDomain: "ieee-nsakcet.firebaseapp.com",
    projectId: "ieee-nsakcet",
    storageBucket: "ieee-nsakcet.appspot.com",
    messagingSenderId: "1030008403662",
    appId: "1:1030008403662:web:f493ca8ad6bd64eb5dc29f",
    measurementId: "G-FC721Y815P"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const storage = firebase.storage()
const auth = firebase.auth()

export { firebaseApp, db, storage, auth }