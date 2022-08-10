import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPJ0GeGCWA71kZw3q0H9Z1ObcPZUwQ0_4",
    authDomain: "crwn-clothing-db-5b2ad.firebaseapp.com",
    projectId: "crwn-clothing-db-5b2ad",
    storageBucket: "crwn-clothing-db-5b2ad.appspot.com",
    messagingSenderId: "352275876084",
    appId: "1:352275876084:web:358ce246be581d9e6f36a1"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    //if user data does not exist 
    //create / set the document with the data from userAuth in my collection.
    if(!userSnapShot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log("Error creating the user", error.message);
        }
    }
    //if user data exists
    //return userDocRef
    return userDocRef;
}