import trainingConstants from "./trainings.constants";

const loading = (data) => ({
  type: trainingConstants.TRAINING_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: trainingConstants.GET_TRAININGS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: trainingConstants.GET_TRAININGS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: trainingConstants.GET_TRAINING_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: trainingConstants.GET_TRAINING_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: trainingConstants.CREATE_TRAINING_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: trainingConstants.CREATE_TRAINING_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: trainingConstants.UPDATE_TRAINING_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: trainingConstants.UPDATE_TRAINING_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: trainingConstants.DELETE_TRAINING_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: trainingConstants.DELETE_TRAINING_FAIL,
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
