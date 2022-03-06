import { types } from "../../types/types";

describe("Test on types.js", () => {
  it("should have the types defined", () => {
    expect(types).toEqual({
      login: "LOGIN",
      logout: "LOGOUT",
      setError: "SET_ERROR",
      removeError: "REMOVE_ERROR",
      startLoading: "START_LOADING",
      stopLoading: "STOP_LOADING",
      addNotes: "ADD_NOTES",
      activeNotes: "ACTIVE_NOTES",
      loadNotes: "LOAD_NOTES",
      updatedNotes: "UPDATED_NOTES",
      deleteNotes: "DELETE_NOTES",
      logoutCleaning: "LOGOUT_CLEANING",
    });
  });
});
