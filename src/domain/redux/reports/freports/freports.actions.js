import freportsConstants from "./freports.constants";

const loading = (data) => ({
  type: freportsConstants.FREPORT_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: freportsConstants.GET_FREPORTS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: freportsConstants.GET_FREPORTS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: freportsConstants.GET_FREPORT_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: freportsConstants.GET_FREPORT_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: freportsConstants.CREATE_FREPORT_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: freportsConstants.CREATE_FREPORT_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: freportsConstants.UPDATE_FREPORT_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: freportsConstants.UPDATE_FREPORT_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: freportsConstants.DELETE_FREPORT_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: freportsConstants.DELETE_FREPORT_FAIL,
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
