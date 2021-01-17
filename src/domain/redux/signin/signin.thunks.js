import { toast } from "react-toastify";
import * as firebase from "firebase";
import { postResource } from "@infrastructure/services/api.service";
import { authProvider } from "@infrastructure/firebase/config";
import { getItems } from "@infrastructure/services/thunkService";
import * as signinActions from "./signin.actions";
import * as countriesActions from "../countries/countries.actions";
import signinConstants from "./signin.constants";

toast.configure();

const signin = (data, history) => async (dispatch) => {
  try {
    dispatch(signinActions.signinLoading(true));
    const response = await postResource("auth/signin", data);
    dispatch(signinActions.signinSuccess(response.user));
    localStorage.setItem("token", response.user.token);
    history.push("/dashboard");
    toast.success(response.message);
    dispatch(getItems(countriesActions, signinConstants.countryparams));
    dispatch(signinActions.signinLoading(false));
  } catch (errors) {
    dispatch(signinActions.signinFail(errors));
    dispatch(signinActions.signinLoading(false));
  }
};

const signinWithGoogle = (history) => async (dispatch) => {
  try {
    dispatch(signinActions.signinLoading(true));
    const response = await firebase.auth().signInWithPopup(authProvider);
    const { displayName, photoURL, email } = response.user;
    dispatch(signinActions.signinSuccess({displayName, photoURL, email}));
    toast.success("Signin success");
    history.push("/dashboard");
    dispatch(signinActions.signinLoading(false));
  } catch (error) {
    toast.error(error.errorMessage);
    dispatch(signinActions.signinFail(error.errorMessage));
    dispatch(signinActions.signinLoading(false));
  }
};

export { signin, signinWithGoogle };
