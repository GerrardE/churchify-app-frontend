import activitiesConstants from "./activities.constants";

const initialState = {
  activities: [],
  activity: {},
  loading: false,
  errors: "",
};

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
  case activitiesConstants.ACTIVITY_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* CREATE ITEM */
  case activitiesConstants.CREATE_ACTIVITY_SUCCESS:
    return {
      ...state,
    };

  case activitiesConstants.CREATE_ACTIVITY_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default activitiesReducer;
