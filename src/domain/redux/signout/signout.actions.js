import signoutConstants from "./signout.constants";

const signoutUser = () => {
  return {
    type: signoutConstants.SIGNOUT_USER,
  };
};

const signoutLoading = (data) => {
  return {
    type: signoutConstants.SIGNOUT_LOADING,
    payload: data,
  };
};

const signoutSuccess = () => {
  return {
    type: signoutConstants.SIGNOUT_SUCCESS,
  };
};

const signoutFail = (data) => {
  return {
    type: signoutConstants.SIGNOUT_FAIL,
    payload: data,
  };
};

export { signoutUser, signoutLoading, signoutSuccess, signoutFail };
