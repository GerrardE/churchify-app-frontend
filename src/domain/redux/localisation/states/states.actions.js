import statesConstants from "./states.constants";

const loading = (data) => ({
  type: statesConstants.STATE_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: statesConstants.GET_STATES_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: statesConstants.GET_STATES_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: statesConstants.GET_STATE_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: statesConstants.GET_STATE_FAIL,
  payload: data,
});


/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: statesConstants.CREATE_STATE_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: statesConstants.CREATE_STATE_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: statesConstants.UPDATE_STATE_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: statesConstants.UPDATE_STATE_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: statesConstants.DELETE_STATE_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: statesConstants.DELETE_STATE_FAIL,
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
