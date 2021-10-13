import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBcFQS76gCQHLL4h-XX84usmwwLmVGvnhU",
    authDomain: "clone-d82d5.firebaseapp.com",
    projectId: "clone-d82d5",
    storageBucket: "clone-d82d5.appspot.com",
    messagingSenderId: "644690077103",
    appId: "1:644690077103:web:7c0aca0dee5ea54bfbbb5a",
    measurementId: "G-7SSC8RG654"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };