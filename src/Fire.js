import firebase from 'firebase/app';
import '@firebase/firestore'

firebase.initializeApp({

    // Produccion 
    // apiKey: "AIzaSyCqBh5wJtLyFf67GP4kMJ9ZNAL1MNmiQpY",
    //   authDomain: "anepsa-1571938449294.firebaseapp.com",
    //   databaseURL: "https://anepsa-1571938449294.firebaseio.com",
    //   projectId: "anepsa-1571938449294",
    //   storageBucket: "anepsa-1571938449294.appspot.com",
    //   messagingSenderId: "149747388023",
    //   appId: "1:149747388023:web:171e3d682a72d17addc072"



      // Desarrollo RQ

      apiKey: "AIzaSyBTun6RFv0FzvM2Mw6JIVIJXg_NqVzDhKE",
      authDomain: "ots-anepsa.firebaseapp.com",
      projectId: "ots-anepsa",
      storageBucket: "ots-anepsa.appspot.com",
      messagingSenderId: "434810939320",
      appId: "1:434810939320:web:0bb9e3796d09c97337514d"  

});
const db = firebase.firestore();
db.settings({})

export default db