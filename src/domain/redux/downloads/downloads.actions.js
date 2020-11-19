import downloadsConstants from "./downloads.constants";

const loading = (data) => ({
  type: downloadsConstants.DOWNLOAD_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: downloadsConstants.GET_DOWNLOADS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: downloadsConstants.GET_DOWNLOADS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: downloadsConstants.GET_DOWNLOAD_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: downloadsConstants.GET_DOWNLOAD_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: downloadsConstants.CREATE_DOWNLOAD_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: downloadsConstants.CREATE_DOWNLOAD_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: downloadsConstants.UPDATE_DOWNLOAD_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: downloadsConstants.UPDATE_DOWNLOAD_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: downloadsConstants.DELETE_DOWNLOAD_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: downloadsConstants.DELETE_DOWNLOAD_FAIL,
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
