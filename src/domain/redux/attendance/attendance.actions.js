import attendanceConstants from "./attendance.constants";

const loading = (data) => ({
  type: attendanceConstants.ATTENDANCE_LOADING,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: attendanceConstants.CREATE_ATTENDANCE_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: attendanceConstants.CREATE_ATTENDANCE_FAIL,
  payload: data,
});

export {
  loading,
  createItemSuccess,
  createItemFail,
};
