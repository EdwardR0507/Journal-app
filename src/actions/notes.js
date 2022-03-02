import Swal from "sweetalert2";
import {
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { types } from "../types/types";
import { db } from "../firebase/firebaseConfig";

// Add a new note
export const addNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    try {
      const docRef = await addDoc(
        collection(db, `users/${uid}/notes`),
        newNote
      );
      console.log("Document written with ID: ", docRef.id);
      dispatch(activeNote(docRef.id, newNote));
      dispatch(addNote(docRef.id, newNote));
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
};

export const activeNote = (id, note) => ({
  type: types.activeNotes,
  payload: {
    id,
    ...note,
  },
});

export const addNote = (id, note) => ({
  type: types.addNotes,
  payload: {
    id,
    ...note,
  },
});

// Load all notes
export const loadNotes = (uid) => {
  return async (dispatch) => {
    const notesSnap = await getDocs(collection(db, `users/${uid}/notes`));
    const notes = [];
    notesSnap.forEach((notesChild) => {
      notes.push({
        id: notesChild.id,
        ...notesChild.data(),
      });
    });
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.loadNotes,
  payload: notes,
});

// Save note
export const saveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!note.url) {
      delete note.url;
    }
    const noteToSend = { ...note };
    delete noteToSend.id;
    try {
      // Ref to the document
      const updateRef = doc(db, `users/${uid}/notes/${note.id}`);
      await updateDoc(updateRef, noteToSend);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
    dispatch(updateNote(note.id, noteToSend));
    Swal.fire({
      icon: "success",
      title: note.title,
      text: "Note saved",
    });
  };
};

export const updateNote = (id, note) => ({
  type: types.updatedNotes,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});