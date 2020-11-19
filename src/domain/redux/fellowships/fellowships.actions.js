import fellowshipsConstants from "./fellowships.constants";

const loading = (data) => ({
  type: fellowshipsConstants.FELLOWSHIP_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: fellowshipsConstants.GET_FELLOWSHIPS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: fellowshipsConstants.GET_FELLOWSHIPS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: fellowshipsConstants.GET_FELLOWSHIP_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: fellowshipsConstants.GET_FELLOWSHIP_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: fellowshipsConstants.CREATE_FELLOWSHIP_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: fellowshipsConstants.CREATE_FELLOWSHIP_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: fellowshipsConstants.UPDATE_FELLOWSHIP_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: fellowshipsConstants.UPDATE_FELLOWSHIP_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: fellowshipsConstants.DELETE_FELLOWSHIP_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: fellowshipsConstants.DELETE_FELLOWSHIP_FAIL,
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
