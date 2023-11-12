import { toast } from "react-hot-toast";
import * as firebase from "firebase";
import { postResource } from "@infrastructure/services/api.service";
import { authProvider } from "@infrastructure/firebase/config";
import { getItems } from "@infrastructure/services/thunkService";
import * as signinActions from "./signin.actions";
import * as countriesActions from "../localisation/countries/countries.actions";
// import * as statesActions from "../localisation/states/states.actions";
import signinConstants from "./signin.constants";

const signin = (data, history) => async (dispatch) => {
  try {
    dispatch(signinActions.signinLoading(true));
    const response = await postResource("users/auth/signin", data);
    dispatch(signinActions.signinSuccess(response.payload));
    if(response.message === "Login successful"){
      history.push("/dashboard");
    }
    dispatch(getItems(countriesActions, signinConstants.countryparams));
    // dispatch(getItems(statesActions, signinConstants.stateparams));
    dispatch(signinActions.signinLoading(false));
  } catch (errors) {
    dispatch(signinActions.signinFail(errors));
    dispatch(signinActions.signinLoading(false));
    toast.error(errors.message);
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
