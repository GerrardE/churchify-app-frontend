import configsConstants from "./configs.constants";

const loading = (data) => ({
  type: configsConstants.CONFIG_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: configsConstants.GET_CONFIGS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: configsConstants.GET_CONFIGS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: configsConstants.GET_CONFIG_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: configsConstants.GET_CONFIG_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: configsConstants.CREATE_CONFIG_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: configsConstants.CREATE_CONFIG_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: configsConstants.UPDATE_CONFIG_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: configsConstants.UPDATE_CONFIG_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: configsConstants.DELETE_CONFIG_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: configsConstants.DELETE_CONFIG_FAIL,
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
