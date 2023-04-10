import assetsConstants from "./assets.constants";

const initialState = {
  assets: [],
  asset: {},
  loading: false,
  errors: "",
};

const assetsReducer = (state = initialState, action) => {
  switch (action.type) {
  case assetsConstants.ASSET_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case assetsConstants.GET_ASSETS_SUCCESS:
    return {
      ...state,
      assets: action.payload,
    };

  case assetsConstants.GET_ASSETS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case assetsConstants.GET_ASSET_SUCCESS:
    return {
      ...state,
      asset: action.payload,
    };

  case assetsConstants.GET_ASSET_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case assetsConstants.CREATE_ASSET_SUCCESS:
    return {
      ...state,
    };

  case assetsConstants.CREATE_ASSET_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case assetsConstants.UPDATE_ASSET_SUCCESS:
    return {
      ...state,
    };

  case assetsConstants.UPDATE_ASSET_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case assetsConstants.DELETE_ASSET_SUCCESS:
    return {
      ...state,
    };

  case assetsConstants.DELETE_ASSET_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  default:
    return state;
  }
};

export default assetsReducer;
