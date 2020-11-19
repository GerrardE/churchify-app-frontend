import eventsConstants from "./events.constants";

const initialState = {
  events: [],
  event: {},
  loading: false,
  errors: "",
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
  case eventsConstants.EVENT_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case eventsConstants.GET_EVENTS_SUCCESS:
    return {
      ...state,
      events: action.payload,
    };

  case eventsConstants.GET_EVENTS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case eventsConstants.GET_EVENT_SUCCESS:
    return {
      ...state,
      event: action.payload,
    };

  case eventsConstants.GET_EVENT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case eventsConstants.CREATE_EVENT_SUCCESS:
    return {
      ...state,
    };

  case eventsConstants.CREATE_EVENT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case eventsConstants.UPDATE_EVENT_SUCCESS:
    return {
      ...state,
    };

  case eventsConstants.UPDATE_EVENT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case eventsConstants.DELETE_EVENT_SUCCESS:
    return {
      ...state,
    };

  case eventsConstants.DELETE_EVENT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  default:
    return state;
  }
};

export default eventsReducer;
