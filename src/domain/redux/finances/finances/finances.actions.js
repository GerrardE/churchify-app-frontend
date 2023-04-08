import financesConstants from "./finances.constants";

const loading = (data) => ({
  type: financesConstants.FINANCE_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: financesConstants.GET_FINANCES_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: financesConstants.GET_FINANCES_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: financesConstants.GET_FINANCE_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: financesConstants.GET_FINANCE_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: financesConstants.CREATE_FINANCE_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: financesConstants.CREATE_FINANCE_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: financesConstants.UPDATE_FINANCE_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: financesConstants.UPDATE_FINANCE_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: financesConstants.DELETE_FINANCE_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: financesConstants.DELETE_FINANCE_FAIL,
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
