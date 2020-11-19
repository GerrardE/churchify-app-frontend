import categoriesConstants from "./categories.constants";

const initialState = {
  categories: [],
  category: {},
  loading: false,
  errors: "",
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
  case categoriesConstants.CATEGORY_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case categoriesConstants.GET_CATEGORIES_SUCCESS:
    return {
      ...state,
      categories: action.payload,
    };

  case categoriesConstants.GET_CATEGORIES_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case categoriesConstants.GET_CATEGORY_SUCCESS:
    return {
      ...state,
      category: action.payload,
    };

  case categoriesConstants.GET_CATEGORY_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case categoriesConstants.CREATE_CATEGORY_SUCCESS:
    return {
      ...state,
    };

  case categoriesConstants.CREATE_CATEGORY_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case categoriesConstants.UPDATE_CATEGORY_SUCCESS:
    return {
      ...state,
    };

  case categoriesConstants.UPDATE_CATEGORY_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case categoriesConstants.DELETE_CATEGORY_SUCCESS:
    return {
      ...state,
    };

  case categoriesConstants.DELETE_CATEGORY_FAIL:
    return {
      ...state,
      errors: action.payload,
    };
  default:
    return state;
  }
};

export default categoriesReducer;
