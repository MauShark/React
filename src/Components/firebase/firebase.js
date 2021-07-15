import firebase from "firebase";
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAO6dcCdDsVcDjSLHFeRrVyqmbdvmYKdBk",
    authDomain: "reactapppro.firebaseapp.com",
    projectId: "reactapppro",
    storageBucket: "reactapppro.appspot.com",
    messagingSenderId: "684634255866",
    appId: "1:684634255866:web:a3cb2455f91c7c04e33443"
};
// Initialize Firebase

const fb =firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();

