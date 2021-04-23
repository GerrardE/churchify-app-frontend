import apilogConstants from "./apilogs.constants";

const loading = (data) => ({
  type: apilogConstants.APILOG_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: apilogConstants.GET_APILOGS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: apilogConstants.GET_APILOGS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: apilogConstants.GET_APILOG_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: apilogConstants.GET_APILOG_FAIL,
  payload: data,
});

export {
  loading,
  getItemsSuccess,
  getItemSuccess,
  getItemsFail,
  getItemFail,
};
