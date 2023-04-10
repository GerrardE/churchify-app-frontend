import remunerationsConstants from "./remunerations.constants";

const loading = (data) => ({
  type: remunerationsConstants.REMUNERATION_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: remunerationsConstants.GET_REMUNERATIONS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: remunerationsConstants.GET_REMUNERATIONS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: remunerationsConstants.GET_REMUNERATION_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: remunerationsConstants.GET_REMUNERATION_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: remunerationsConstants.CREATE_REMUNERATION_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: remunerationsConstants.CREATE_REMUNERATION_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: remunerationsConstants.UPDATE_REMUNERATION_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: remunerationsConstants.UPDATE_REMUNERATION_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: remunerationsConstants.DELETE_REMUNERATION_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: remunerationsConstants.DELETE_REMUNERATION_FAIL,
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
