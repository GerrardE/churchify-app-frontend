import groupConstants from "./groups.constants";

const initialState = {
  groups: [],
  group: {},
  loading: false,
  errors: "",
};

const GROUPReducer = (state = initialState, action) => {
  switch (action.type) {
  case groupConstants.GROUP_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* CREATE ITEM */
  case groupConstants.CREATE_GROUP_SUCCESS:
    return {
      ...state,
    };

  case groupConstants.CREATE_GROUP_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default GROUPReducer;
