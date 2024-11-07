import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { Note } from '../../store';

export const loadNotes = async (uid: string | null) => {
  if (!uid) throw new Error('user uid does not exists');

  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
  const docs = await getDocs(collectionRef);

  const notes = [] as Note[];
  docs.forEach((doc) => notes.push({ id: doc.id, ...doc.data() } as Note));

  return notes;
};
