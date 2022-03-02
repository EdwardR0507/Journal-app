import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null,
};
export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.activeNotes:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case types.addNotes:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    case types.loadNotes:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.updatedNotes:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };
    default:
      return state;
  }
};
