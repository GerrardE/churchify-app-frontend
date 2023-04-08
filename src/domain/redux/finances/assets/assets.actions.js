import assetsConstants from "./assets.constants";

const loading = (data) => ({
  type: assetsConstants.ASSET_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: assetsConstants.GET_ASSETS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: assetsConstants.GET_ASSETS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: assetsConstants.GET_ASSET_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: assetsConstants.GET_ASSET_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: assetsConstants.CREATE_ASSET_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: assetsConstants.CREATE_ASSET_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: assetsConstants.UPDATE_ASSET_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: assetsConstants.UPDATE_ASSET_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: assetsConstants.DELETE_ASSET_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: assetsConstants.DELETE_ASSET_FAIL,
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
