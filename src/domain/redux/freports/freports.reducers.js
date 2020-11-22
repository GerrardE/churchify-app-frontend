import freportsConstants from "./freports.constants";

const initialState = {
  freports: [],
  freport: {},
  loading: false,
  errors: "",
};

const freportReducer = (state = initialState, action) => {
  switch (action.type) {
  case freportsConstants.FREPORT_LOADING:
    return {
      ...state,
      loading: action.payload,
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

  default:
    return state;
  }
};

export default freportReducer;
