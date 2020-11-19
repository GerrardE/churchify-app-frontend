import fellowshipsConstants from "./fellowships.constants";

const initialState = {
  fellowships: [],
  fellowship: {},
  loading: false,
  errors: "",
};

const fellowshipsReducer = (state = initialState, action) => {
  switch (action.type) {
  case fellowshipsConstants.FELLOWSHIP_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case fellowshipsConstants.GET_FELLOWSHIPS_SUCCESS:
    return {
      ...state,
      fellowships: action.payload,
    };

  case fellowshipsConstants.GET_FELLOWSHIPS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case fellowshipsConstants.GET_FELLOWSHIP_SUCCESS:
    return {
      ...state,
      fellowship: action.payload,
    };

  case fellowshipsConstants.GET_FELLOWSHIP_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case fellowshipsConstants.CREATE_FELLOWSHIP_SUCCESS:
    return {
      ...state,
    };

  case fellowshipsConstants.CREATE_FELLOWSHIP_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case fellowshipsConstants.UPDATE_FELLOWSHIP_SUCCESS:
    return {
      ...state,
    };

  case fellowshipsConstants.UPDATE_FELLOWSHIP_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case fellowshipsConstants.DELETE_FELLOWSHIP_SUCCESS:
    return {
      ...state,
    };

  case fellowshipsConstants.DELETE_FELLOWSHIP_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  default:
    return state;
  }
};

export default fellowshipsReducer;
