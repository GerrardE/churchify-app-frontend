import rolesConstants from "./roles.constants";

const initialState = {
  roles: [],
  role: {},
  loading: false,
  errors: "",
};

const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
  case rolesConstants.ROLE_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case rolesConstants.GET_ROLES_SUCCESS:
    return {
      ...state,
      roles: action.payload,
    };

  case rolesConstants.GET_ROLES_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case rolesConstants.GET_ROLE_SUCCESS:
    return {
      ...state,
      role: action.payload,
    };

  case rolesConstants.GET_ROLE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case rolesConstants.CREATE_ROLE_SUCCESS:
    return {
      ...state,
    };

  case rolesConstants.CREATE_ROLE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case rolesConstants.UPDATE_ROLE_SUCCESS:
    return {
      ...state,
    };

  case rolesConstants.UPDATE_ROLE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case rolesConstants.DELETE_ROLE_SUCCESS:
    return {
      ...state,
      role: action.payload,
    };

  case rolesConstants.DELETE_ROLE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default rolesReducer;
