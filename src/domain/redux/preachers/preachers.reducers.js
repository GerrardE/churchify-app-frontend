import preachersConstants from "./preachers.constants";

const initialState = {
  preachers: [],
  preacher: {},
  loading: false,
  errors: "",
};

const preachersReducer = (state = initialState, action) => {
  switch (action.type) {
  case preachersConstants.PREACHER_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case preachersConstants.GET_PREACHERS_SUCCESS:
    return {
      ...state,
      preachers: action.payload,
    };

  case preachersConstants.GET_PREACHERS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case preachersConstants.GET_PREACHER_SUCCESS:
    return {
      ...state,
      preacher: action.payload,
    };

  case preachersConstants.GET_PREACHER_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case preachersConstants.CREATE_PREACHER_SUCCESS:
    return {
      ...state,
    };

  case preachersConstants.CREATE_PREACHER_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case preachersConstants.UPDATE_PREACHER_SUCCESS:
    return {
      ...state,
    };

  case preachersConstants.UPDATE_PREACHER_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case preachersConstants.DELETE_PREACHER_SUCCESS:
    return {
      ...state,
    };

  case preachersConstants.DELETE_PREACHER_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  default:
    return state;
  }
};

export default preachersReducer;
