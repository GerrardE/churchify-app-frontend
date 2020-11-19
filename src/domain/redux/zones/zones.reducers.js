import zonesConstants from "./zones.constants";

const initialState = {
  zones: [],
  zone: {},
  loading: false,
  errors: "",
};

const zonesReducer = (state = initialState, action) => {
  switch (action.type) {
  case zonesConstants.ZONE_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case zonesConstants.GET_ZONES_SUCCESS:
    return {
      ...state,
      zones: action.payload,
    };

  case zonesConstants.GET_ZONES_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case zonesConstants.GET_ZONE_SUCCESS:
    return {
      ...state,
      zone: action.payload,
    };

  case zonesConstants.GET_ZONE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case zonesConstants.CREATE_ZONE_SUCCESS:
    return {
      ...state,
    };

  case zonesConstants.CREATE_ZONE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case zonesConstants.UPDATE_ZONE_SUCCESS:
    return {
      ...state,
    };

  case zonesConstants.UPDATE_ZONE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case zonesConstants.DELETE_ZONE_SUCCESS:
    return {
      ...state,
      zone: action.payload,
    };

  case zonesConstants.DELETE_ZONE_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default zonesReducer;
