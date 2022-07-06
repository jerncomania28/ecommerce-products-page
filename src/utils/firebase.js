import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAARSoxkYPTyRFavV6-Ds1CBFqYSV9Bv3I",
  authDomain: "sneakers-59964.firebaseapp.com",
  projectId: "sneakers-59964",
  storageBucket: "sneakers-59964.appspot.com",
  messagingSenderId: "1089471974236",
  appId: "1:1089471974236:web:09dab6d284c6954b8a8f99",
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopUp = async () =>
  await signInWithPopup(auth, googleProvider);

export const createUserViaEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInViaEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, password);
};

export const db = getFirestore();

export const createUserDocWithAuth = async (userAuth, otherProps = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userDocSnapshot = await getDoc(userDocRef);

  if (!userDocSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...otherProps,
      });
    } catch (err) {
      console.log("Unable to create User Document", err.message);
    }
  }

  return userDocRef;
};

export const signOutUser = () => signOut(auth);

export const onAuthChangedListener = async (callback) =>
  onAuthStateChanged(auth, callback);
