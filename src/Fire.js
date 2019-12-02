import firebase from 'firebase/app';
import '@firebase/firestore'

firebase.initializeApp({
  // apiKey: "AIzaSyCIakIiq4sVGlzXdSaa6rksCDJgiqlnq38",
  // authDomain: "anepsaordentrabajo.firebaseapp.com",
  // databaseURL: "https://anepsaordentrabajo.firebaseio.com",
  // projectId: "anepsaordentrabajo",
  // storageBucket:   "anepsaordentrabajo.appspot.com",
  // messagingSenderId: "385626876617",
  // appId: "1:385626876617:web:8f530a5f73c974fce9fb18",
  // measurementId: "G-J77YSXRSZJ"
  apiKey: "AIzaSyCqBh5wJtLyFf67GP4kMJ9ZNAL1MNmiQpY",
    authDomain: "anepsa-1571938449294.firebaseapp.com",
    databaseURL: "https://anepsa-1571938449294.firebaseio.com",
    projectId: "anepsa-1571938449294",
    storageBucket: "anepsa-1571938449294.appspot.com",
    messagingSenderId: "149747388023",
    appId: "1:149747388023:web:171e3d682a72d17addc072"
  
});
  const db = firebase.firestore();
  db.settings({})

  export default db