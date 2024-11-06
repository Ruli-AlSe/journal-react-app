import { createAsyncThunk } from '@reduxjs/toolkit';

import { checkingCredentials, login, logout } from './authSlice';
import {
  signInWithGoogle,
  registerUserWithEmailAndPassword,
  UserData,
  loginWithEmailAndPassword,
  logoutFirebase,
} from '../../firebase/providers';

export const checkingAuthentication = createAsyncThunk(
  'auth/checkingAuthentication',
  async (_, thunkAPI) => {
    try {
      const { dispatch } = thunkAPI;
      dispatch(checkingCredentials());
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const startGoogleSignIn = createAsyncThunk('auth/startGoogleSignIn', async (_, thunkAPI) => {
  try {
    const { dispatch } = thunkAPI;

    dispatch(checkingCredentials());

    const result = await signInWithGoogle();

    if (!result.ok) {
      return dispatch(logout({ errorMessage: result.errorMessage ?? null }));
    }

    dispatch(
      login({
        uuid: String(result.uid),
        email: String(result.email),
        displayName: String(result.displayName),
        photoURL: String(result.photoURL),
      })
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const startCreatingUserWithEmailAndPassword = createAsyncThunk(
  'auth/startCreatingUserWithEmailAndPassword',
  async (userData: UserData, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(checkingCredentials());

    const result = await registerUserWithEmailAndPassword(userData);

    if (!result.ok) {
      return dispatch(logout({ errorMessage: result.errorMessage ?? null }));
    }

    dispatch(
      login({
        uuid: String(result.uid),
        email: String(result.email),
        displayName: String(result.displayName),
        photoURL: String(result.photoURL),
      })
    );
  }
);

export const startLoginWithEmailAndPassword = createAsyncThunk(
  'auth/startLoginWithEmailAndPassword',
  async (userData: UserData, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(checkingCredentials());

    const result = await loginWithEmailAndPassword(userData);

    if (!result.ok) {
      return dispatch(logout({ errorMessage: result.errorMessage ?? null }));
    }

    dispatch(
      login({
        uuid: String(result.uid),
        email: String(result.email),
        displayName: String(result.displayName),
        photoURL: String(result.photoURL),
      })
    );
  }
);

export const startLogout = createAsyncThunk('auth/startLogout', async (_, thunkApi) => {
  const { dispatch } = thunkApi;

  await logoutFirebase();

  dispatch(
    logout({
      errorMessage: null,
    })
  );
});
