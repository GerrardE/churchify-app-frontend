import trainingreportsConstants from "./trainingreports.constants";

const initialState = {
  trainingreports: [],
  trainingreport: {},
  loading: false,
  errors: "",
};

const trainingreportsReducer = (state = initialState, action) => {
  switch (action.type) {
  case trainingreportsConstants.TRAININGREPORT_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEMS */
  case trainingreportsConstants.GET_TRAININGREPORTS_SUCCESS:
    return {
      ...state,
      trainingreports: action.payload,
    };

  case trainingreportsConstants.GET_TRAININGREPORTS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case trainingreportsConstants.GET_TRAININGREPORT_SUCCESS:
    return {
      ...state,
      trainingreport: action.payload,
    };

  case trainingreportsConstants.GET_TRAININGREPORT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case trainingreportsConstants.CREATE_TRAININGREPORT_SUCCESS:
    return {
      ...state,
    };

  case trainingreportsConstants.CREATE_TRAININGREPORT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case trainingreportsConstants.UPDATE_TRAININGREPORT_SUCCESS:
    return {
      ...state,
    };

  case trainingreportsConstants.UPDATE_TRAININGREPORT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case trainingreportsConstants.DELETE_TRAININGREPORT_SUCCESS:
    return {
      ...state,
    };

  case trainingreportsConstants.DELETE_TRAININGREPORT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default trainingreportsReducer;
