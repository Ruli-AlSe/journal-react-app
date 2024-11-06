import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = <T>(selector: (state: RootState) => T) => useSelector(selector);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
