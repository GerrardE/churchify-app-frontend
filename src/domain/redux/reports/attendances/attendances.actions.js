import attendancesConstants from "./attendances.constants";

const loading = (data) => ({
  type: attendancesConstants.ATTENDANCE_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: attendancesConstants.GET_ATTENDANCES_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: attendancesConstants.GET_ATTENDANCES_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: attendancesConstants.GET_ATTENDANCE_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: attendancesConstants.GET_ATTENDANCE_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: attendancesConstants.CREATE_ATTENDANCE_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: attendancesConstants.CREATE_ATTENDANCE_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: attendancesConstants.UPDATE_ATTENDANCE_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: attendancesConstants.UPDATE_ATTENDANCE_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: attendancesConstants.DELETE_ATTENDANCE_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: attendancesConstants.DELETE_ATTENDANCE_FAIL,
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
