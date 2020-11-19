import eventsConstants from "./events.constants";

const loading = (data) => ({
  type: eventsConstants.EVENT_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: eventsConstants.GET_EVENTS_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: eventsConstants.GET_EVENTS_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: eventsConstants.GET_EVENT_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: eventsConstants.GET_EVENT_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: eventsConstants.CREATE_EVENT_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: eventsConstants.CREATE_EVENT_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: eventsConstants.UPDATE_EVENT_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: eventsConstants.UPDATE_EVENT_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: eventsConstants.DELETE_EVENT_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: eventsConstants.DELETE_EVENT_FAIL,
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
