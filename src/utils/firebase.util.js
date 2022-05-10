// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdhfR5kEPPlX72d-9ebaR3NJCfkk_wD5k",
  authDomain: "crown-clothing-db-db.firebaseapp.com",
  projectId: "crown-clothing-db-db",
  storageBucket: "crown-clothing-db-db.appspot.com",
  messagingSenderId: "763472398866",
  appId: "1:763472398866:web:d623942e660f670974e6cb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  'login_hint': 'user@example.com',
  'prompt': 'consent'
  // prompt: 'select_account',
});


export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const dB = getFirestore(firebaseApp);

export const createUserDocFromAuth = async function (userAuth) {
  // console.log(userAuth);
  const userDocRef = doc(dB, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  // console.log(userSnapShot);
  console.log(userSnapShot.exists());
  if (!userSnapShot.exists()) {
    // userSnapShot.data() will be undefined in this case
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();
    console.log("No such document!");
    try {
      const usersRef = collection(dB, "users");
      await setDoc(doc(usersRef, userAuth.uid), {
        uid,
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return console.log("Document data:", userSnapShot.data());
} 