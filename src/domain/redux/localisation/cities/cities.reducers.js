import citiesConstants from "./cities.constants";

const initialState = {
  cities: [],
  city: {},
  loading: false,
  errors: "",
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
  case citiesConstants.CITY_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case citiesConstants.GET_CITIES_SUCCESS:
    return {
      ...state,
      cities: action.payload,
    };

  case citiesConstants.GET_CITIES_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case citiesConstants.GET_CITY_SUCCESS:
    return {
      ...state,
      city: action.payload,
    };

  case citiesConstants.GET_CITY_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  
  /* CREATE ITEM */
  case citiesConstants.CREATE_CITY_SUCCESS:
    return {
      ...state,
    };

  case citiesConstants.CREATE_CITY_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case citiesConstants.UPDATE_CITY_SUCCESS:
    return {
      ...state,
    };

  case citiesConstants.UPDATE_CITY_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case citiesConstants.DELETE_CITY_SUCCESS:
    return {
      ...state,
    };

  case citiesConstants.DELETE_CITY_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  default:
    return state;
  }
};

export default citiesReducer;
