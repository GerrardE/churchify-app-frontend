import preachersConstants from "./preachers.constants";

const loading = (data) => ({
  type: preachersConstants.PREACHER_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: preachersConstants.GET_PREACHERS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: preachersConstants.GET_PREACHERS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: preachersConstants.GET_PREACHER_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: preachersConstants.GET_PREACHER_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: preachersConstants.CREATE_PREACHER_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: preachersConstants.CREATE_PREACHER_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: preachersConstants.UPDATE_PREACHER_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: preachersConstants.UPDATE_PREACHER_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: preachersConstants.DELETE_PREACHER_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: preachersConstants.DELETE_PREACHER_FAIL,
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
