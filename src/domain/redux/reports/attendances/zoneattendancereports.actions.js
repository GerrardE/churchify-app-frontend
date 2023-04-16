import attendancesConstants from "./attendances.constants";

const loading = (data) => ({
  type: attendancesConstants.ATTENDANCE_LOADING,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: attendancesConstants.CREATE_ATTENDANCE_ZONE_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: attendancesConstants.CREATE_ATTENDANCE_ZONE_FAIL,
  payload: data,
});

export {
  loading,
  createItemSuccess,
  createItemFail,
};
