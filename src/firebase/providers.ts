import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FisebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FisebaseAuth, googleProvider);
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
  displayName: string;
  email: string;
  password: string;
}

export const registerUserWithEmailAndPassword = async ({
  email,
  password,
  displayName,
}: UserData) => {
  try {
    const resp = await createUserWithEmailAndPassword(FisebaseAuth, email, password);
    const { uid, photoURL } = resp.user;

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
