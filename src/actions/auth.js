import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app, googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { startLoading, stopLoading } from "./ui";

const auth = getAuth(app);
// Register a new user with email and password and also the name
export const startRegisterEmailPassword = (email, password, name) => {
  return async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, {
        displayName: name,
      });
      dispatch(login(user.uid, user.displayName));
    } catch (error) {
      console.log(error);
    }
  };
};

// Login with email and password
export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(login(user.uid, user.displayName));
      dispatch(stopLoading());
    } catch (error) {
      console.log(error);
      dispatch(stopLoading());
    }
  };
};

// Login with google
export const startGoogleLogin = () => {
  return async (dispatch) => {
    try {
      const { user } = await signInWithPopup(auth, googleAuthProvider);
      dispatch(login(user.uid, user.displayName));
    } catch (error) {
      console.log(error);
    }
  };
};

// Login with uid and displayName
export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
