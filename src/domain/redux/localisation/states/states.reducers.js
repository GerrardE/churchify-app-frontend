import statesConstants from "./states.constants";

const initialState = {
  states_: [],
  state_: {},
  loading: false,
  errors: "",
};

const statesReducer = (state = initialState, action) => {
  switch (action.type) {
  case statesConstants.STATE_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case statesConstants.GET_STATES_SUCCESS:
    return {
      ...state,
      states_: action.payload,
    };

  case statesConstants.GET_STATES_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case statesConstants.GET_STATE_SUCCESS:
    return {
      ...state,
      state_: action.payload,
    };

  case statesConstants.GET_STATE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default statesReducer;
