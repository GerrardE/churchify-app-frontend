import permissionsConstants from "./permissions.constants";

const initialState = {
  permissions: [],
  permission: {},
  loading: false,
  errors: "",
};

const permissionsReducer = (state = initialState, action) => {
  switch (action.type) {
  case permissionsConstants.PERMISSION_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case permissionsConstants.GET_PERMISSIONS_SUCCESS:
    return {
      ...state,
      permissions: action.payload,
    };

  case permissionsConstants.GET_PERMISSIONS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case permissionsConstants.GET_PERMISSION_SUCCESS:
    return {
      ...state,
      permission: action.payload,
    };

  case permissionsConstants.GET_PERMISSION_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case permissionsConstants.CREATE_PERMISSION_SUCCESS:
    return {
      ...state,
    };

  case permissionsConstants.CREATE_PERMISSION_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case permissionsConstants.UPDATE_PERMISSION_SUCCESS:
    return {
      ...state,
    };

  case permissionsConstants.UPDATE_PERMISSION_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case permissionsConstants.DELETE_PERMISSION_SUCCESS:
    return {
      ...state,
      permission: action.payload,
    };

  case permissionsConstants.DELETE_PERMISSION_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default permissionsReducer;
