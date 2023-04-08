import remunerationsConstants from "./remunerations.constants";

const initialState = {
  remunerations: [],
  remuneration: {},
  loading: false,
  errors: "",
};

const remunerationsReducer = (state = initialState, action) => {
  switch (action.type) {
  case remunerationsConstants.REMUNERATION_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case remunerationsConstants.GET_REMUNERATIONS_SUCCESS:
    return {
      ...state,
      remunerations: action.payload,
    };

  case remunerationsConstants.GET_REMUNERATIONS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case remunerationsConstants.GET_REMUNERATION_SUCCESS:
    return {
      ...state,
      remuneration: action.payload,
    };

  case remunerationsConstants.GET_REMUNERATION_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case remunerationsConstants.CREATE_REMUNERATION_SUCCESS:
    return {
      ...state,
    };

  case remunerationsConstants.CREATE_REMUNERATION_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case remunerationsConstants.UPDATE_REMUNERATION_SUCCESS:
    return {
      ...state,
    };

  case remunerationsConstants.UPDATE_REMUNERATION_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case remunerationsConstants.DELETE_REMUNERATION_SUCCESS:
    return {
      ...state,
    };

  case remunerationsConstants.DELETE_REMUNERATION_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  default:
    return state;
  }
};

export default remunerationsReducer;
