import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { authSlice } from './auth/authSlice';
import { journalSlice } from './journal/journalSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = <T>(selector: (state: RootState) => T) => useSelector(selector);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
