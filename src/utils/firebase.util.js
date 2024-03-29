// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, setDoc, writeBatch, query, getDocs } from 'firebase/firestore';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, deleteUser, onAuthStateChanged } from 'firebase/auth';

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
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  'login_hint': 'user@example.com',
  'prompt': 'consent'
  // prompt: 'select_account',
});

export const checkIfUSerExists = async (userAuth) => {
  const userDocRef = doc(dB, 'users', userAuth.uid);

  return await getDoc(userDocRef);
}

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const dB = getFirestore(firebaseApp);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(dB, collectionKey);
  const batch = writeBatch(dB);

  objectsToAdd.forEach(obj => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });

  await batch.commit();
  console.log('Done');
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(dB, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
}

export const createUserDocFromAuth = async function (userAuth, additionalParams) {
  if (!userAuth) return
  const userSnapShot = await checkIfUSerExists(userAuth);
  console.log("User exist: ", userSnapShot.exists());

  if (!userSnapShot.exists()) {
    // userSnapShot.data() will be undefined in this case
    console.log(userAuth);
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();
    console.log("No such document!");
    try {
      // const usersDocRef = collection(dB, "users");
      const usersDocRef = doc(dB, 'users', userAuth.uid);
      await setDoc(usersDocRef, {
        uid,
        displayName,
        email,
        createdAt,
        ...additionalParams
      })
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userSnapShot;
}



export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password)
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

export const deleteAuthUser = async (currentUser) => {
  return deleteUser(currentUser)
}

export const signOutUSer = async (currentUser) => signOut(auth);

export const onAuthStateListener = async (callback) => onAuthStateChanged(auth, callback);