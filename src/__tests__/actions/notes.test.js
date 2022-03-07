import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { addNewNote } from "../../actions/notes";
import { types } from "../../types/types";
import { db } from "../../firebase/firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
  auth: {
    uid: "test",
    displayName: "test person",
  },
  notes: {
    notes: [],
    active: {},
  },
});

describe("Test on notes.js", () => {
  it("should create a new note", async () => {
    await store.dispatch(addNewNote());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.activeNotes,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });
    expect(actions[1]).toEqual({
      type: types.addNotes,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });
    const { uid } = store.getState().auth;
    const docId = actions[0].payload.id;

    const docRef = doc(db, `users/${uid}/notes/${docId}`);
    await deleteDoc(docRef);
  });
});
