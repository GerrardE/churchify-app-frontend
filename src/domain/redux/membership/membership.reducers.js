import membershipConstants from "./membership.constants";

const initialState = {
  memberships: [],
  membership: {},
  loading: false,
  errors: "",
};

const membershipReducer = (state = initialState, action) => {
  switch (action.type) {
  case membershipConstants.MEMBERSHIP_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* CREATE ITEM */
  case membershipConstants.CREATE_MEMBERSHIP_SUCCESS:
    return {
      ...state,
    };

  case membershipConstants.CREATE_MEMBERSHIP_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default membershipReducer;
