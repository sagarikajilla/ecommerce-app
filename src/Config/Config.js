import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC4x9gnQ-BYkPMVUfzYEd53O2uBiNYeuoI",
    authDomain: "ecommerce-app-3ec11.firebaseapp.com",
    projectId: "ecommerce-app-3ec11",
    storageBucket: "ecommerce-app-3ec11.appspot.com",
    messagingSenderId: "622884080986",
    appId: "1:622884080986:web:941b07441f5d06ff9eb763",
    measurementId: "G-16RBR6G5Y4"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}