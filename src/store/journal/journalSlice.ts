import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Note {
  id: string;
  title: string;
  body: string;
  date: number;
  imageUrls: string[];
}

export interface JournalState {
  isSaving: boolean;
  messageSaved: string;
  notes: Note[];
  active: Note | null;
}

const initialState: JournalState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
};

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action: PayloadAction<Note>) => {
      state.active = action.payload;
    },
    setNotes: (state, action: PayloadAction<Note[]>) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {},
    updateNote: (state, action: PayloadAction<Note>) => {},
    deleteNoteById: (state, action: PayloadAction<Note>) => {},
  },
});

export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;

export default journalSlice.reducer;
