import zonesConstants from "./zones.constants";

const loading = (data) => ({
  type: zonesConstants.ZONE_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: zonesConstants.GET_ZONES_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: zonesConstants.GET_ZONES_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: zonesConstants.GET_ZONE_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: zonesConstants.GET_ZONE_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: zonesConstants.CREATE_ZONE_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: zonesConstants.CREATE_ZONE_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: zonesConstants.UPDATE_ZONE_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: zonesConstants.UPDATE_ZONE_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: zonesConstants.DELETE_ZONE_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: zonesConstants.DELETE_ZONE_FAIL,
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
