import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Test on authReducer.js", () => {
  const initialState = {
    uid: null,
    displayName: null,
  };

  it("should be return the initialState", () => {
    const state = authReducer(initialState, {});
    expect(state).toEqual(initialState);
  });
  it("should be return the uid and displayName if login", () => {
    const payload = {
      uid: "123",
      displayName: "Edward",
    };
    const action = {
      type: types.login,
      payload,
    };
    const state = authReducer(initialState, action);
    expect(state).toEqual(payload);
  });
  it("should be return an empty object if logout", () => {
    const action = {
      type: types.logout,
    };
    const state = authReducer(initialState, action);
    expect(state).toEqual({});
  });
  it("should not be changes on the state", () => {
    const action = {
      type: "changes",
    };
    const state = authReducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
