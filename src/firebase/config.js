import app from 'firebase/app';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyC4l7qwzfIVwr-A4MMO-EOkrnMDHuslbGo",
    authDomain: "job-listing-9096a.firebaseapp.com",
    projectId: "job-listing-9096a",
    storageBucket: "job-listing-9096a.appspot.com",
    messagingSenderId: "741565589272",
    appId: "1:741565589272:web:0fa3560b2af81820dc606d"
};

const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebase, firestore, app};