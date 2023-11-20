import countriesConstants from "./countries.constants";

const loading = (data) => ({
  type: countriesConstants.COUNTRY_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: countriesConstants.GET_COUNTRIES_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: countriesConstants.GET_COUNTRIES_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: countriesConstants.GET_COUNTRY_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: countriesConstants.GET_COUNTRY_FAIL,
  payload: data,
});


/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: countriesConstants.CREATE_COUNTRY_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: countriesConstants.CREATE_COUNTRY_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: countriesConstants.UPDATE_COUNTRY_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: countriesConstants.UPDATE_COUNTRY_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: countriesConstants.DELETE_COUNTRY_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: countriesConstants.DELETE_COUNTRY_FAIL,
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
