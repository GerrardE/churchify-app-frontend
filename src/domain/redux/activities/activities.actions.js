import activitiesConstants from "./activities.constants";

const loading = (data) => ({
  type: activitiesConstants.ACTIVITY_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: activitiesConstants.GET_ACTIVITIES_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: activitiesConstants.GET_ACTIVITIES_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: activitiesConstants.GET_ACTIVITY_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: activitiesConstants.GET_ACTIVITY_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: activitiesConstants.CREATE_ACTIVITY_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: activitiesConstants.CREATE_ACTIVITY_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: activitiesConstants.UPDATE_ACTIVITY_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: activitiesConstants.UPDATE_ACTIVITY_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: activitiesConstants.DELETE_ACTIVITY_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: activitiesConstants.DELETE_ACTIVITY_FAIL,
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
