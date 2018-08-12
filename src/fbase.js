import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAjTq1Tid5YlYdXfBFqoch20WIrZn59c3Y",
    authDomain: "bookstore-39640.firebaseapp.com",
    databaseURL: "https://bookstore-39640.firebaseio.com",
    projectId: "bookstore-39640",
    storageBucket: "bookstore-39640.appspot.com",
    messagingSenderId: "1010805342694"
});

const fbase = Rebase.createClass(firebaseApp.database());

export {fbase, firebaseApp};