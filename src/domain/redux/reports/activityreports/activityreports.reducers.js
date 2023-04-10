import activityreportsConstants from "./activityreports.constants";

const initialState = {
  activityreports: [],
  activityreport: {},
  loading: false,
  errors: "",
};

const activityreportsReducer = (state = initialState, action) => {
  switch (action.type) {
  case activityreportsConstants.ACTIVITYREPORT_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEMS */
  case activityreportsConstants.GET_ACTIVITYREPORTS_SUCCESS:
    return {
      ...state,
      activityreports: action.payload,
    };

  case activityreportsConstants.GET_ACTIVITYREPORTS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case activityreportsConstants.GET_ACTIVITYREPORT_SUCCESS:
    return {
      ...state,
      activityreport: action.payload,
    };

  case activityreportsConstants.GET_ACTIVITYREPORT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case activityreportsConstants.CREATE_ACTIVITYREPORT_SUCCESS:
    return {
      ...state,
    };

  case activityreportsConstants.CREATE_ACTIVITYREPORT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case activityreportsConstants.UPDATE_ACTIVITYREPORT_SUCCESS:
    return {
      ...state,
    };

  case activityreportsConstants.UPDATE_ACTIVITYREPORT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case activityreportsConstants.DELETE_ACTIVITYREPORT_SUCCESS:
    return {
      ...state,
    };

  case activityreportsConstants.DELETE_ACTIVITYREPORT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default activityreportsReducer;
