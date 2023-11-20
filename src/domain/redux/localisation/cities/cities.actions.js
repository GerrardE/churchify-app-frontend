import citiesConstants from "./cities.constants";

const loading = (data) => ({
  type: citiesConstants.CITY_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: citiesConstants.GET_CITIES_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: citiesConstants.GET_CITIES_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: citiesConstants.GET_CITY_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: citiesConstants.GET_CITY_FAIL,
  payload: data,
});


/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: citiesConstants.CREATE_CITY_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: citiesConstants.CREATE_CITY_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: citiesConstants.UPDATE_CITY_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: citiesConstants.UPDATE_CITY_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: citiesConstants.DELETE_CITY_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: citiesConstants.DELETE_CITY_FAIL,
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
