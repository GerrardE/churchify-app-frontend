import configsConstants from "./configs.constants";

const initialState = {
  configs: [],
  config: {},
  loading: false,
  errors: "",
};

const configsReducer = (state = initialState, action) => {
  switch (action.type) {
  case configsConstants.CONFIG_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEMS */
  case configsConstants.GET_CONFIGS_SUCCESS:
    return {
      ...state,
      configs: action.payload,
    };

  case configsConstants.GET_CONFIGS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case configsConstants.GET_CONFIG_SUCCESS:
    return {
      ...state,
      config: action.payload,
    };

  case configsConstants.GET_CONFIG_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case configsConstants.CREATE_CONFIG_SUCCESS:
    return {
      ...state,
    };

  case configsConstants.CREATE_CONFIG_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case configsConstants.UPDATE_CONFIG_SUCCESS:
    return {
      ...state,
    };

  case configsConstants.UPDATE_CONFIG_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case configsConstants.DELETE_CONFIG_SUCCESS:
    return {
      ...state,
      config: action.payload,
    };

  case configsConstants.DELETE_CONFIG_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default configsReducer;
