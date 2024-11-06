import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  uuid: string | null;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  errorMessage: string | null;
}

interface LoginPayload {
  uuid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

interface LogoutPayload {
  errorMessage: string | null;
}

const initialState: AuthState = {
  status: 'not-authenticated',
  uuid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      const { uuid, email, displayName, photoURL } = action.payload;

      state.status = 'not-authenticated';
      state.uuid = uuid;
      state.email = email;
      state.displayName = displayName;
      state.photoURL = photoURL;
      state.errorMessage = null;
    },
    logout: (state, action: PayloadAction<LogoutPayload>) => {
      state.status = 'not-authenticated';
      state.uuid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = action.payload.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;
