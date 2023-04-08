import groupsConstants from "./groups.constants";

const initialState = {
  groups: [],
  group: {},
  loading: false,
  errors: "",
};

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
  case groupsConstants.GROUP_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case groupsConstants.GET_GROUPS_SUCCESS:
    return {
      ...state,
      groups: action.payload,
    };

  case groupsConstants.GET_GROUPS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case groupsConstants.GET_GROUP_SUCCESS:
    return {
      ...state,
      group: action.payload,
    };

  case groupsConstants.GET_GROUP_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case groupsConstants.CREATE_GROUP_SUCCESS:
    return {
      ...state,
    };

  case groupsConstants.CREATE_GROUP_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case groupsConstants.UPDATE_GROUP_SUCCESS:
    return {
      ...state,
    };

  case groupsConstants.UPDATE_GROUP_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case groupsConstants.DELETE_GROUP_SUCCESS:
    return {
      ...state,
    };

  case groupsConstants.DELETE_GROUP_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  default:
    return state;
  }
};

export default groupsReducer;
