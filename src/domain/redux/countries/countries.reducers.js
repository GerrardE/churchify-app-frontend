import countriesConstants from "./countries.constants";

const initialState = {
  countries: [],
  country: {},
  loading: false,
  errors: "",
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
  case countriesConstants.COUNTRY_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case countriesConstants.GET_COUNTRIES_SUCCESS:
    return {
      ...state,
      countries: action.payload,
    };

  case countriesConstants.GET_COUNTRIES_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case countriesConstants.GET_COUNTRY_SUCCESS:
    return {
      ...state,
      country: action.payload,
    };

  case countriesConstants.GET_COUNTRY_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default countriesReducer;
