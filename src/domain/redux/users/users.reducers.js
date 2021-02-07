import userConstants from "./users.constants";

const initialState = {
  users: [],
  user: {},
  loading: false,
  errors: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
  case userConstants.USER_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

    /* GET ITEM */
  case userConstants.GET_USERS_SUCCESS:
    return {
      ...state,
      users: action.payload,
    };

  case userConstants.GET_USERS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

    /* GET ITEM */
  case userConstants.GET_USER_SUCCESS:
    return {
      ...state,
      user: action.payload,
    };

  case userConstants.GET_USER_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

    /* CREATE ITEM */
  case userConstants.CREATE_USER_SUCCESS:
    return {
      ...state,
    };

  case userConstants.CREATE_USER_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

    /* UPDATE ITEM */
  case userConstants.UPDATE_USER_SUCCESS:
    return {
      ...state,
    };

  case userConstants.UPDATE_USER_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

    /* DELETE ITEM */
  case userConstants.DELETE_USER_SUCCESS:
    return {
      ...state,
    };

  case userConstants.DELETE_USER_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default usersReducer;
