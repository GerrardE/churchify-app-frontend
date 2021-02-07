import dashboardConstants from "./dashboard.constants";

const initialState = {
  dashboard: {},
  loading: false,
  errors: {},
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
  case dashboardConstants.DASHBOARD_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ONE */
  case dashboardConstants.GET_DASHBOARD_SUCCESS:
    return {
      ...state,
      dashboard: action.payload,
    };

  case dashboardConstants.GET_DASHBOARD_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default dashboardReducer;
