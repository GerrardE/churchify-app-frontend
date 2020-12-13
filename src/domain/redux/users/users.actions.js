import userConstants from "./users.constants";

const loading = (data) => ({
  type: userConstants.USER_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: userConstants.GET_USERS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: userConstants.GET_USERS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: userConstants.GET_USER_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: userConstants.GET_USER_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: userConstants.CREATE_USER_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: userConstants.CREATE_USER_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: userConstants.UPDATE_USER_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: userConstants.UPDATE_USER_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: userConstants.DELETE_USER_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: userConstants.DELETE_USER_FAIL,
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
