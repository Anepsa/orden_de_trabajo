import firebase from 'firebase/app';
import '@firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyCIakIiq4sVGlzXdSaa6rksCDJgiqlnq38",
  authDomain: "anepsaordentrabajo.firebaseapp.com",
  databaseURL: "https://anepsaordentrabajo.firebaseio.com",
  projectId: "anepsaordentrabajo",
  storageBucket: "anepsaordentrabajo.appspot.com",
  messagingSenderId: "385626876617",
  appId: "1:385626876617:web:8f530a5f73c974fce9fb18",
  measurementId: "G-J77YSXRSZJ"
  });
  const db = firebase.firestore();
  db.settings({})

  export default db