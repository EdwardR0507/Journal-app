import { types } from "../types/types";

export const setError = (errorMessage) => ({
  type: types.setError,
  payload: errorMessage,
});

export const removeError = () => ({
  type: types.removeError,
});

export const startLoading = () => ({
  type: types.startLoading,
});

export const stopLoading = () => ({
  type: types.stopLoading,
});
