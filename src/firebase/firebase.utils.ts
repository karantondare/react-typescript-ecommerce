import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyB24WqoENUI8icqxo5613mgF0z2hxxCwsI',
  authDomain: 'crown-db-77c47.firebaseapp.com',
  projectId: 'crown-db-77c47',
  storageBucket: 'crown-db-77c47.appspot.com',
  messagingSenderId: '326723592476',
  appId: '1:326723592476:web:ddb90c1ac3d2cb07a0dad9',
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
