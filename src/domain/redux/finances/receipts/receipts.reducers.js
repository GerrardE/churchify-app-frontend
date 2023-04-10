import receiptsConstants from "./receipts.constants";

const initialState = {
  receipts: [],
  receipt: {},
  loading: false,
  errors: "",
};

const receiptsReducer = (state = initialState, action) => {
  switch (action.type) {
  case receiptsConstants.RECEIPT_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case receiptsConstants.GET_RECEIPTS_SUCCESS:
    return {
      ...state,
      receipts: action.payload,
    };

  case receiptsConstants.GET_RECEIPTS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case receiptsConstants.GET_RECEIPT_SUCCESS:
    return {
      ...state,
      receipt: action.payload,
    };

  case receiptsConstants.GET_RECEIPT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case receiptsConstants.CREATE_RECEIPT_SUCCESS:
    return {
      ...state,
    };

  case receiptsConstants.CREATE_RECEIPT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case receiptsConstants.UPDATE_RECEIPT_SUCCESS:
    return {
      ...state,
    };

  case receiptsConstants.UPDATE_RECEIPT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case receiptsConstants.DELETE_RECEIPT_SUCCESS:
    return {
      ...state,
    };

  case receiptsConstants.DELETE_RECEIPT_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  default:
    return state;
  }
};

export default receiptsReducer;
