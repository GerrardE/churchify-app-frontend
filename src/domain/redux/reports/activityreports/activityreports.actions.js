import activityreportsConstants from "./activityreports.constants";

const loading = (data) => ({
  type: activityreportsConstants.ACTIVITYREPORT_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: activityreportsConstants.GET_ACTIVITYREPORTS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: activityreportsConstants.GET_ACTIVITYREPORTS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: activityreportsConstants.GET_ACTIVITYREPORT_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: activityreportsConstants.GET_ACTIVITYREPORT_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: activityreportsConstants.CREATE_ACTIVITYREPORT_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: activityreportsConstants.CREATE_ACTIVITYREPORT_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: activityreportsConstants.UPDATE_ACTIVITYREPORT_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: activityreportsConstants.UPDATE_ACTIVITYREPORT_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: activityreportsConstants.DELETE_ACTIVITYREPORT_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: activityreportsConstants.DELETE_ACTIVITYREPORT_FAIL,
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
