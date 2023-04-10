import trainingreportsConstants from "./trainingreports.constants";

const loading = (data) => ({
  type: trainingreportsConstants.TRAININGREPORT_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: trainingreportsConstants.GET_TRAININGREPORTS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: trainingreportsConstants.GET_TRAININGREPORTS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: trainingreportsConstants.GET_TRAININGREPORT_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: trainingreportsConstants.GET_TRAININGREPORT_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: trainingreportsConstants.CREATE_TRAININGREPORT_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: trainingreportsConstants.CREATE_TRAININGREPORT_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: trainingreportsConstants.UPDATE_TRAININGREPORT_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: trainingreportsConstants.UPDATE_TRAININGREPORT_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: trainingreportsConstants.DELETE_TRAININGREPORT_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: trainingreportsConstants.DELETE_TRAININGREPORT_FAIL,
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
