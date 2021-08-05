import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// firebase config file
const firebaseConfig = {
    apiKey: "AIzaSyC6x14YtH1M0M760CW2aENDxsSj5btCqHE",
    authDomain: "the-jagger-lounge.firebaseapp.com",
    projectId: "the-jagger-lounge",
    storageBucket: "the-jagger-lounge.appspot.com",
    messagingSenderId: "30762947107",
    appId: "1:30762947107:web:578927c9174a39e9e3d796",
    measurementId: "G-YXTYSQVPKB"
};

// function to create user profile doc in firestore database
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    // if user is authenticated store user in 'users' document with user id as identifier
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // create a snapshot of the data
    const snapShot = await userRef.get();

    // if snapshot of data exists display name and email
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // try wait to user info
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            // catch error if user could not be created
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    // return user reference object
    return userRef;
};

//initialise firebase using config file
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// export firebase auth and firstore to authorise user and store credentials
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
