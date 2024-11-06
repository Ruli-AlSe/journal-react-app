import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkingCredentials } from './authSlice';

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
  } catch (error) {
    console.error(error);
    throw error;
  }
});
