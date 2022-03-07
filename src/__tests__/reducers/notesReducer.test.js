import { notesReducer } from "../../reducers/notesReducer";
import { types } from "../../types/types";

const mockNotes = [
  {
    id: "1",
    title: "Note 1",
    body: "Body 1",
    date: "1646610222530",
  },
  {
    id: "2",
    title: "Note 2",
    body: "Body 2",
    date: "1646610222531",
  },
];

const initialState = {
  notes: [],
  active: null,
};

describe("Test on notesReducer.js", () => {
  it("should be return the initialState", () => {
    const state = notesReducer(initialState, {});
    expect(state).toEqual(initialState);
  });
  it("should be return the active note", () => {
    const payload = {
      id: "123",
      title: "title",
      body: "body",
      date: "1646610222530",
    };
    const action = {
      type: types.activeNotes,
      payload,
    };
    const { active } = notesReducer(initialState, action);
    expect(active).toEqual(payload);
  });
  it("should be add a note", () => {
    const payload = {
      id: "123",
      title: "title",
      body: "body",
      date: "1646610222530",
    };
    const action = {
      type: types.addNotes,
      payload,
    };
    const { notes } = notesReducer(initialState, action);
    expect(notes).toEqual([payload]);
    expect(notes).toHaveLength(1);
  });

  it("should be return notes", () => {
    const payload = [
      {
        id: "123",
        title: "title",
        body: "body",
        date: "1646610222530",
      },
      {
        id: "124",
        title: "title",
        body: "body",
        date: "1646610222530",
      },
    ];
    const action = {
      type: types.loadNotes,
      payload,
    };
    const { notes } = notesReducer(initialState, action);
    expect(notes).toEqual(payload);
    expect(notes).toHaveLength(2);
  });

  it("should be update a note", () => {
    const state = {
      notes: mockNotes,
      active: null,
    };
    const payload = {
      id: "1",
      note: {
        id: "1",
        title: "test title",
        body: "test body",
        date: "1646610222530",
      },
    };
    const action = {
      type: types.updatedNotes,
      payload,
    };
    const { notes } = notesReducer(state, action);
    expect(notes[0].title).toBe("test title");
  });

  it("should be delete a note", () => {
    const state = {
      notes: mockNotes,
      active: null,
    };
    const payload = "1";
    const action = {
      type: types.deleteNotes,
      payload,
    };
    const { notes } = notesReducer(state, action);
    expect(notes).toHaveLength(1);
  });

  it("should be Clear the state after lgout", () => {
    const state = {
      notes: mockNotes,
      active: null,
    };
    const action = {
      type: types.logoutCleaning,
    };
    const newState = notesReducer(state, action);
    expect(newState).toEqual(initialState);
  });
});
