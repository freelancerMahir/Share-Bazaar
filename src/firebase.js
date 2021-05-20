// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBny3auRzd2Gp4sbYybJ6HAiKaYEyumCCQ",
  authDomain: "share-bazaar.firebaseapp.com",
  projectId: "share-bazaar",
  storageBucket: "share-bazaar.appspot.com",
  messagingSenderId: "442884274102",
  appId: "1:442884274102:web:c6a99ef39af1d92f4d7317",
  measurementId: "G-H4W0BH8F13"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage();

export { auth, provider, storage }
export default db;
