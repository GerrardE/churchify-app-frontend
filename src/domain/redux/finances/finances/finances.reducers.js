import financesConstants from "./finances.constants";

const initialState = {
  finances: [],
  finance: {},
  loading: false,
  errors: "",
};

const financesReducer = (state = initialState, action) => {
  switch (action.type) {
  case financesConstants.FINANCE_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case financesConstants.GET_FINANCES_SUCCESS:
    return {
      ...state,
      finances: action.payload,
    };

  case financesConstants.GET_FINANCES_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case financesConstants.GET_FINANCE_SUCCESS:
    return {
      ...state,
      finance: action.payload,
    };

  case financesConstants.GET_FINANCE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case financesConstants.CREATE_FINANCE_SUCCESS:
    return {
      ...state,
    };

  case financesConstants.CREATE_FINANCE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case financesConstants.UPDATE_FINANCE_SUCCESS:
    return {
      ...state,
    };

  case financesConstants.UPDATE_FINANCE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case financesConstants.DELETE_FINANCE_SUCCESS:
    return {
      ...state,
    };

  case financesConstants.DELETE_FINANCE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  default:
    return state;
  }
};

export default financesReducer;
