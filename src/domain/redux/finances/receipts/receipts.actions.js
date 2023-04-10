import receiptsConstants from "./receipts.constants";

const loading = (data) => ({
  type: receiptsConstants.RECEIPT_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: receiptsConstants.GET_RECEIPTS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: receiptsConstants.GET_RECEIPTS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: receiptsConstants.GET_RECEIPT_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: receiptsConstants.GET_RECEIPT_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: receiptsConstants.CREATE_RECEIPT_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: receiptsConstants.CREATE_RECEIPT_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: receiptsConstants.UPDATE_RECEIPT_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: receiptsConstants.UPDATE_RECEIPT_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: receiptsConstants.DELETE_RECEIPT_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: receiptsConstants.DELETE_RECEIPT_FAIL,
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
