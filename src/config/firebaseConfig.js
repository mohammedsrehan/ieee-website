// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth';        // for authentication

// import 'firebase/initializeApp'

const firebaseConfig = {
    apiKey: "AIzaSyCPhHnKUzu-KJQNGqMlM_jOvR_vUmNAXMU",
    authDomain: "ieee-website-bdb0c.firebaseapp.com",
    projectId: "ieee-website-bdb0c",
    storageBucket: "ieee-website-bdb0c.appspot.com",
    messagingSenderId: "1060364262427",
    appId: "1:1060364262427:web:01c2c3f45970adb1d36cbe",
    measurementId: "G-3N41ZMRXQP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const storage = firebase.storage()
const auth = firebase.auth()

export { firebaseApp, db, storage, auth }