import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoading, removeError, setError, startLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading())
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        setTimeout(() => {
        
          dispatch(finishLoading())  
        }, 3000);
        
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const startRegisterWithEmailPassword = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(removeError());
        dispatch(login(user.uid, user.name));
      })
      .catch((e) => {
        dispatch(setError(e.message));
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    dispatch(startLoading())
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user: { uid, displayName } }) => {
        dispatch(login(uid, displayName));
        setTimeout(() => {
        
          dispatch(finishLoading())  
        }, 3000);
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
