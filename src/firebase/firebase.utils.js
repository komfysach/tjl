import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC6x14YtH1M0M760CW2aENDxsSj5btCqHE",
    authDomain: "the-jagger-lounge.firebaseapp.com",
    projectId: "the-jagger-lounge",
    storageBucket: "the-jagger-lounge.appspot.com",
    messagingSenderId: "30762947107",
    appId: "1:30762947107:web:578927c9174a39e9e3d796",
    measurementId: "G-YXTYSQVPKB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    console.log(firestore.doc('users/234fasjdkfkl'));
}

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
