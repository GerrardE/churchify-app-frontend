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

export {
  loading,
  getItemsSuccess,
  getItemSuccess,
  getItemsFail,
  getItemFail,
};
