import downloadsConstants from "./downloads.constants";

const initialState = {
  downloads: [],
  download: {},
  loading: false,
  errors: "",
};

const downloadsReducer = (state = initialState, action) => {
  switch (action.type) {
  case downloadsConstants.DOWNLOAD_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case downloadsConstants.GET_DOWNLOADS_SUCCESS:
    return {
      ...state,
      downloads: action.payload,
    };

  case downloadsConstants.GET_DOWNLOADS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case downloadsConstants.GET_DOWNLOAD_SUCCESS:
    return {
      ...state,
      download: action.payload,
    };

  case downloadsConstants.GET_DOWNLOAD_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case downloadsConstants.CREATE_DOWNLOAD_SUCCESS:
    return {
      ...state,
    };

  case downloadsConstants.CREATE_DOWNLOAD_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case downloadsConstants.UPDATE_DOWNLOAD_SUCCESS:
    return {
      ...state,
    };

  case downloadsConstants.UPDATE_DOWNLOAD_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case downloadsConstants.DELETE_DOWNLOAD_SUCCESS:
    return {
      ...state,
    };

  case downloadsConstants.DELETE_DOWNLOAD_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  default:
    return state;
  }
};

export default downloadsReducer;
