import freportsConstants from "./freports.constants";

const initialState = {
  freports: [],
  freport: {},
  loading: false,
  errors: "",
};

const freportsReducer = (state = initialState, action) => {
  switch (action.type) {
  case freportsConstants.FREPORT_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case freportsConstants.GET_FREPORTS_SUCCESS:
    return {
      ...state,
      freports: action.payload,
    };

  case freportsConstants.GET_FREPORTS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case freportsConstants.GET_FREPORT_SUCCESS:
    return {
      ...state,
      freport: action.payload,
    };

  case freportsConstants.GET_FREPORT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case freportsConstants.CREATE_FREPORT_SUCCESS:
    return {
      ...state,
    };

  case freportsConstants.CREATE_FREPORT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case freportsConstants.UPDATE_FREPORT_SUCCESS:
    return {
      ...state,
    };

  case freportsConstants.UPDATE_FREPORT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case freportsConstants.DELETE_FREPORT_SUCCESS:
    return {
      ...state,
    };

  case freportsConstants.DELETE_FREPORT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  default:
    return state;
  }
};

export default freportsReducer;
