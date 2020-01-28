import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyClYD6lKR72hSd9E7JKUjLxtVzBGANv2bk",
    authDomain: "tutty-59261.firebaseapp.com",
    databaseURL: "https://tutty-59261.firebaseio.com",
    projectId: "tutty-59261",
    storageBucket: "tutty-59261.appspot.com",
    messagingSenderId: "278497116632",
    appId: "1:278497116632:web:e629b86010da2d82b3b2ad",
    measurementId: "G-0R50PPPGBR"
};

export default class Firebase {
    static auth;

    static init() {
        firebase.initializeApp(config);
        Firebase.auth = firebase.auth();
        Firebase.database = firebase.database();
    }
}