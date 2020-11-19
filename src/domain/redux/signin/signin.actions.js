import signinConstants from "./signin.constants";

const signinLoading = (data) => {
  return {
    type: signinConstants.SIGNIN_LOADING,
    payload: data,
  };
};

const signinSuccess = (data) => {
  return {
    type: signinConstants.SIGNIN_SUCCESS,
    payload: data,
  };
};

const signinFail = (data) => {
  return {
    type: signinConstants.SIGNIN_FAIL,
    payload: data,
  };
};

/* SIGN IN WITH GOOGLE */
const signinWithGoogleSuccess = (data) => {
  return {
    type: signinConstants.SIGNIN_WITH_GOOGLE_SUCCESS,
    payload: data,
  };
};

const signinwithGoogleFail = (data) => {
  return {
    type: signinConstants.SIGNIN_WITH_GOOGLE_FAIL,
    payload: data,
  };
};

export { signinLoading, signinSuccess, signinFail, signinWithGoogleSuccess, signinwithGoogleFail };
