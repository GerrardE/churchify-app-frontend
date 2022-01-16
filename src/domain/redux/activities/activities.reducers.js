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

  /* GET ITEMS */
  case activitiesConstants.GET_ACTIVITIES_SUCCESS:
    return {
      ...state,
      activities: action.payload,
    };

  case activitiesConstants.GET_ACTIVITIES_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case activitiesConstants.GET_ACTIVITY_SUCCESS:
    return {
      ...state,
      activity: action.payload,
    };

  case activitiesConstants.GET_ACTIVITY_FAIL:
    return {
      ...state,
      errors: action.payload,
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

  /* UPDATE ITEM */
  case activitiesConstants.UPDATE_ACTIVITY_SUCCESS:
    return {
      ...state,
    };

  case activitiesConstants.UPDATE_ACTIVITY_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case activitiesConstants.DELETE_ACTIVITY_SUCCESS:
    return {
      ...state,
    };

  case activitiesConstants.DELETE_ACTIVITY_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default activitiesReducer;
