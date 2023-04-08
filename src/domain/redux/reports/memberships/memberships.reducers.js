import membershipsConstants from "./memberships.constants";

const initialState = {
  memberships: [],
  membership: {},
  loading: false,
  errors: "",
};

const membershipsReducer = (state = initialState, action) => {
  switch (action.type) {
  case membershipsConstants.MEMBERSHIP_LOADING:
    return {
      ...state,
      loading: action.payload,
    };
  
    /* GET ITEMS */
  case membershipsConstants.GET_MEMBERSHIPS_SUCCESS:
    return {
      ...state,
      memberships: action.payload,
    };
  
  case membershipsConstants.GET_MEMBERSHIPS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  
    /* GET ITEM */
  case membershipsConstants.GET_MEMBERSHIP_SUCCESS:
    return {
      ...state,
      download: action.payload,
    };
  
  case membershipsConstants.GET_MEMBERSHIP_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  
    /* CREATE ITEM */
  case membershipsConstants.CREATE_MEMBERSHIP_SUCCESS:
    return {
      ...state,
    };
  
  case membershipsConstants.CREATE_MEMBERSHIP_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  
    /* UPDATE ITEM */
  case membershipsConstants.UPDATE_MEMBERSHIP_SUCCESS:
    return {
      ...state,
    };
  
  case membershipsConstants.UPDATE_MEMBERSHIP_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  
    /* DELETE ITEM */
  case membershipsConstants.DELETE_MEMBERSHIP_SUCCESS:
    return {
      ...state,
    };
  
  case membershipsConstants.DELETE_MEMBERSHIP_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  default:
    return state;
  }
};

export default membershipsReducer;
