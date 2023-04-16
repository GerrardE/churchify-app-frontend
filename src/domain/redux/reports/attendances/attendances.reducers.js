import attendancesConstants from "./attendances.constants";

const initialState = {
  attendances: [],
  attendance: {},
  loading: false,
  errors: "",
};

const attendancesReducer = (state = initialState, action) => {
  switch (action.type) {
  case attendancesConstants.ATTENDANCE_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case attendancesConstants.GET_ATTENDANCES_SUCCESS:
    return {
      ...state,
      attendances: action.payload,
    };

  case attendancesConstants.GET_ATTENDANCES_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case attendancesConstants.GET_ATTENDANCE_SUCCESS:
    return {
      ...state,
      attendance: action.payload,
    };

  case attendancesConstants.GET_ATTENDANCE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case attendancesConstants.CREATE_ATTENDANCE_SUCCESS:
    return {
      ...state,
    };

  case attendancesConstants.CREATE_ATTENDANCE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case attendancesConstants.UPDATE_ATTENDANCE_SUCCESS:
    return {
      ...state,
    };

  case attendancesConstants.UPDATE_ATTENDANCE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case attendancesConstants.DELETE_ATTENDANCE_SUCCESS:
    return {
      ...state,
    };

  case attendancesConstants.DELETE_ATTENDANCE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  default:
    return state;
  }
};

export default attendancesReducer;
