import {
  removeError,
  setError,
  startLoading,
  stopLoading,
} from "../../actions/ui";
import { types } from "../../types/types";

describe("Test on ui.js", () => {
  it("should be works", () => {
    const setErrorAction = setError("error message");
    expect(setErrorAction).toEqual({
      type: types.setError,
      payload: "error message",
    });
    const removeErrorAction = removeError();
    expect(removeErrorAction).toEqual({
      type: types.removeError,
    });
    const startLoadingAction = startLoading();
    expect(startLoadingAction).toEqual({
      type: types.startLoading,
    });
    const stopLoadingAction = stopLoading();
    expect(stopLoadingAction).toEqual({
      type: types.stopLoading,
    });
  });
});
