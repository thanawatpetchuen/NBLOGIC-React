import * as Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyA_TkSTsw8ldxh7A4WTz3-TDF3usto50UM",
    authDomain: "nblogic-9c99f.firebaseapp.com",
    databaseURL: "https://nblogic-9c99f.firebaseio.com",
    projectId: "nblogic-9c99f",
    storageBucket: "nblogic-9c99f.appspot.com",
    messagingSenderId: "498066422349"
};

export const firebaseRef = Firebase.initializeApp(config);