import { useEffect } from 'react';

import { login, logout, useAppDispatch, useAppSelector } from '../store';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';

export const useCheckAuth = () => {
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout({ errorMessage: null }));

      const { uid, email, displayName, photoURL } = user;

      dispatch(
        login({
          uuid: uid,
          email: String(email),
          displayName: String(displayName),
          photoURL: String(photoURL),
        })
      );
    });
  }, []);

  return status;
};
