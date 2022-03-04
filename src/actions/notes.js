import Swal from "sweetalert2";
import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { types } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";

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
    const readRef = collection(db, `users/${uid}/notes`);
    const notesSnap = await getDocs(readRef);
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

// Upload image
export const uploadImage = (file, active) => {
  return async (dispatch) => {
    Swal.fire({
      title: "Uploading...",
      text: "Please wait",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const fileUrl = await fileUpload(file);
    dispatch(saveNote({ ...active, url: fileUrl }));
    Swal.close();
  };
};

// Delete note
export const deleteNote = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    try {
      // Ref to the document
      const deleteRef = doc(db, `users/${uid}/notes/${id}`);
      await deleteDoc(deleteRef);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
    dispatch(removeNote(id));
    Swal.fire({
      icon: "success",
      title: "Note deleted",
    });
  };
};

export const removeNote = (id) => ({
  type: types.deleteNotes,
  payload: id,
});

// Clear notes after logout
export const clearNotes = () => ({
  type: types.logoutCleaning,
});
