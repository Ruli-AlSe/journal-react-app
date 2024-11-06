// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCEebCdF-JZp_sAngGXYvtClBK6JLrzfmY',
  authDomain: 'react-projects-f945f.firebaseapp.com',
  projectId: 'react-projects-f945f',
  storageBucket: 'react-projects-f945f.firebasestorage.app',
  messagingSenderId: '541906265198',
  appId: '1:541906265198:web:aaa628b701fdfd2234b27f',
};

// Initialize Firebase
export const FisebaseApp = initializeApp(firebaseConfig);

export const FisebaseAuth = getAuth(FisebaseApp);
export const FisebaseDB = getFirestore(FisebaseApp);
