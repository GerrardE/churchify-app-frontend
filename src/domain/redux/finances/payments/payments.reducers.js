import paymentsConstants from "./payments.constants";

const initialState = {
  payments: [],
  payment: {},
  loading: false,
  errors: "",
};

const paymentsReducer = (state = initialState, action) => {
  switch (action.type) {
  case paymentsConstants.PAYMENT_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case paymentsConstants.GET_PAYMENTS_SUCCESS:
    return {
      ...state,
      payments: action.payload,
    };

  case paymentsConstants.GET_PAYMENTS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case paymentsConstants.GET_PAYMENT_SUCCESS:
    return {
      ...state,
      payment: action.payload,
    };

  case paymentsConstants.GET_PAYMENT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case paymentsConstants.CREATE_PAYMENT_SUCCESS:
    return {
      ...state,
    };

  case paymentsConstants.CREATE_PAYMENT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case paymentsConstants.UPDATE_PAYMENT_SUCCESS:
    return {
      ...state,
    };

  case paymentsConstants.UPDATE_PAYMENT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case paymentsConstants.DELETE_PAYMENT_SUCCESS:
    return {
      ...state,
    };

  case paymentsConstants.DELETE_PAYMENT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  default:
    return state;
  }
};

export default paymentsReducer;
