import membershipsConstants from "./memberships.constants";

const loading = (data) => ({
  type: membershipsConstants.MEMBERSHIP_LOADING,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: membershipsConstants.CREATE_MEMBERSHIP_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: membershipsConstants.CREATE_MEMBERSHIP_FAIL,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: membershipsConstants.GET_MEMBERSHIPS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: membershipsConstants.GET_MEMBERSHIPS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: membershipsConstants.GET_MEMBERSHIP_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: membershipsConstants.GET_MEMBERSHIP_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: membershipsConstants.UPDATE_MEMBERSHIP_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: membershipsConstants.UPDATE_MEMBERSHIP_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: membershipsConstants.DELETE_MEMBERSHIP_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: membershipsConstants.DELETE_MEMBERSHIP_FAIL,
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
