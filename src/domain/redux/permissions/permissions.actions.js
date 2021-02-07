import permissionsConstants from "./permissions.constants";

const loading = (data) => ({
  type: permissionsConstants.PERMISSION_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: permissionsConstants.GET_PERMISSIONS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: permissionsConstants.GET_PERMISSIONS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: permissionsConstants.GET_PERMISSION_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: permissionsConstants.GET_PERMISSION_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: permissionsConstants.CREATE_PERMISSION_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: permissionsConstants.CREATE_PERMISSION_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: permissionsConstants.UPDATE_PERMISSION_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: permissionsConstants.UPDATE_PERMISSION_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: permissionsConstants.DELETE_PERMISSION_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: permissionsConstants.DELETE_PERMISSION_FAIL,
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
