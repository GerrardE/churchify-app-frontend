import groupsConstants from "./groups.constants";

const loading = (data) => ({
  type: groupsConstants.GROUP_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: groupsConstants.GET_GROUPS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: groupsConstants.GET_GROUPS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: groupsConstants.GET_GROUP_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: groupsConstants.GET_GROUP_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: groupsConstants.CREATE_GROUP_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: groupsConstants.CREATE_GROUP_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: groupsConstants.UPDATE_GROUP_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: groupsConstants.UPDATE_GROUP_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: groupsConstants.DELETE_GROUP_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: groupsConstants.DELETE_GROUP_FAIL,
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
