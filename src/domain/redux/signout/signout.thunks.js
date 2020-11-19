import * as signoutActions from "./signout.actions";

const signout = () => (dispatch) => {
  try{
    dispatch(signoutActions.signoutUser());
    dispatch(signoutActions.signoutLoading(true));
    dispatch(signoutActions.signoutSuccess());
    dispatch(signoutActions.signoutLoading(false));
  } catch(err) {
    dispatch(signoutActions.signoutFail(err));
    dispatch(signoutActions.signoutLoading(false));
  }
};

export default signout;
