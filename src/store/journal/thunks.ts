import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, doc, setDoc } from 'firebase/firestore/lite';

import { RootState } from '../store';
import { FirebaseDB } from '../../firebase/config';
import {
  addNewEmptyNote,
  Note,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} from './journalSlice';
import { loadNotes } from '../../journal/helpers';

export const startNewNote = createAsyncThunk('journal/startNewNote', async (_, thunkAPI) => {
  try {
    const { getState, dispatch } = thunkAPI;
    const { uuid } = (getState() as RootState).auth;
    dispatch(savingNewNote());

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    } as Note;

    const newDoc = doc(collection(FirebaseDB, `${uuid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const startLoadingNotes = createAsyncThunk(
  'journal/startLoadingNotes',
  async (_, thunkAPI) => {
    try {
      const { dispatch, getState } = thunkAPI;
      const { uuid } = (getState() as RootState).auth;
      console.log(uuid);

      const notes = await loadNotes(uuid);

      dispatch(setNotes(notes));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const startSaveNote = createAsyncThunk('journal/startSaveNote', async (_, thunkAPI) => {
  try {
    const { getState, dispatch } = thunkAPI;
    dispatch(setSaving());

    const { uuid } = (getState() as RootState).auth;
    const { active: note } = (getState() as RootState).journal;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    const docRef = doc(FirebaseDB, `${uuid}/journal/notes/${note?.id}`);
    await setDoc(docRef, noteToFirestore, { merge: true });

    dispatch(updateNote(note as Note));
  } catch (error) {
    console.error(error);
    throw error;
  }
});
