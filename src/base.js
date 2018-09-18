import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAIgew7h1bnCAX5ur1u_6cCoh6gvILKVA",
  authDomain: "catch-of-the-day-the-frost-1.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-the-frost-1.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;