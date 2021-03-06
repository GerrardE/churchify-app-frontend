import attendanceConstants from "./attendance.constants";

const initialState = {
  attendances: [],
  attendance: {},
  loading: false,
  errors: "",
};

const attendanceReducer = (state = initialState, action) => {
  switch (action.type) {
  case attendanceConstants.ATTENDANCE_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* CREATE ITEM */
  case attendanceConstants.CREATE_ATTENDANCE_SUCCESS:
    return {
      ...state,
      attendances: action.payload,
    };

  case attendanceConstants.CREATE_ATTENDANCE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  case attendanceConstants.CREATE_SYNOD_ATTENDANCE_SUCCESS:
    return {
      ...state,
      attendance: action.payload,
    };

  case attendanceConstants.CREATE_SYNOD_ATTENDANCE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default attendanceReducer;
