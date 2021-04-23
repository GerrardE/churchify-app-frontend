import apilogConstants from "./apilogs.constants";

const initialState = {
  apilogs: [],
  apilog: {},
  loading: false,
  errors: "",
};

const apilogsReducer = (state = initialState, action) => {
  switch (action.type) {
  case apilogConstants.APILOG_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEMS */
  case apilogConstants.GET_APILOGS_SUCCESS:
    return {
      ...state,
      apilogs: action.payload,
    };

  case apilogConstants.GET_APILOGS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case apilogConstants.GET_APILOG_SUCCESS:
    return {
      ...state,
      apilog: action.payload,
    };

  case apilogConstants.GET_APILOG_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default apilogsReducer;
