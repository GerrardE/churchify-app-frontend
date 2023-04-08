import paymentsConstants from "./payments.constants";

const loading = (data) => ({
  type: paymentsConstants.PAYMENT_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: paymentsConstants.GET_PAYMENTS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: paymentsConstants.GET_PAYMENTS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: paymentsConstants.GET_PAYMENT_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: paymentsConstants.GET_PAYMENT_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: paymentsConstants.CREATE_PAYMENT_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: paymentsConstants.CREATE_PAYMENT_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: paymentsConstants.UPDATE_PAYMENT_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: paymentsConstants.UPDATE_PAYMENT_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: paymentsConstants.DELETE_PAYMENT_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: paymentsConstants.DELETE_PAYMENT_FAIL,
  payload: data,
});

export {
  loading,
  getItemsSuccess,
  getItemSuccess,
  getItemsFail,
  getItemFail,
  createItemSuccess,
  createItemFail,
  updateItemSuccess,
  updateItemFail,
  deleteItemSuccess,
  deleteItemFail,
};
