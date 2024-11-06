import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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
