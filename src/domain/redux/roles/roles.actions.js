import rolesConstants from "./roles.constants";

const loading = (data) => ({
  type: rolesConstants.ROLE_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: rolesConstants.GET_ROLES_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: rolesConstants.GET_ROLES_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: rolesConstants.GET_ROLE_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: rolesConstants.GET_ROLE_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: rolesConstants.CREATE_ROLE_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: rolesConstants.CREATE_ROLE_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: rolesConstants.UPDATE_ROLE_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: rolesConstants.UPDATE_ROLE_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: rolesConstants.DELETE_ROLE_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: rolesConstants.DELETE_ROLE_FAIL,
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
