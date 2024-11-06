import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error: unknown) {
    console.error(error);

    return {
      ok: false,
      errorMessage: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
};

export interface UserData {
  displayName?: string;
  email: string;
  password: string;
}

export const registerUserWithEmailAndPassword = async ({
  email,
  password,
  displayName,
}: UserData) => {
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL } = resp.user;

    if (!FirebaseAuth.currentUser) {
      throw new Error('User not found');
    }

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    console.error(error);

    return {
      ok: false,
      errorMessage: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
};

export const loginWithEmailAndPassword = async ({ email, password }: UserData) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL, displayName } = resp.user;

    if (!FirebaseAuth.currentUser) {
      throw new Error('User not found');
    }

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    console.error(error);

    return {
      ok: false,
      errorMessage: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
