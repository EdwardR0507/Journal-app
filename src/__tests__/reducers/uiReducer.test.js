import { uiReducer } from "../../reducers/uiReducer";
import { types } from "../../types/types";

const initialState = {
  loading: false,
  msgError: null,
};
describe("Test on uiReducer.js", () => {
  it("shoud be return the initialState", () => {
    const state = uiReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  it("should be set the error message", () => {
    const payload = "error message";
    const action = {
      type: types.setError,
      payload,
    };
    const { msgError } = uiReducer(initialState, action);
    expect(msgError).toBe("error message");
  });

  it("should be remove the error message", () => {
    const action = {
      type: types.removeError,
    };
    const { msgError } = uiReducer(initialState, action);
    expect(msgError).toBe(null);
  });

  it("should be start the loading", () => {
    const action = {
      type: types.startLoading,
    };
    const { loading } = uiReducer(initialState, action);
    expect(loading).toBe(true);
  });

  it("should be stop the loading", () => {
    const action = {
      type: types.stopLoading,
    };
    const { loading } = uiReducer(initialState, action);
    expect(loading).toBe(false);
  });
});
