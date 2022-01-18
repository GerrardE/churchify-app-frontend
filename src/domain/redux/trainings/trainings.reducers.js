import trainingConstants from "./trainings.constants";

const initialState = {
  trainings: [],
  training: {},
  loading: false,
  errors: "",
};

const trainingReducer = (state = initialState, action) => {
  switch (action.type) {
  case trainingConstants.TRAINING_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case trainingConstants.GET_TRAININGS_SUCCESS:
    return {
      ...state,
      trainings: action.payload,
    };

  case trainingConstants.GET_TRAININGS_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case trainingConstants.GET_TRAINING_SUCCESS:
    return {
      ...state,
      training: action.payload,
    };

  case trainingConstants.GET_TRAINING_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case trainingConstants.CREATE_TRAINING_SUCCESS:
    return {
      ...state,
    };

  case trainingConstants.CREATE_TRAINING_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case trainingConstants.UPDATE_TRAINING_SUCCESS:
    return {
      ...state,
    };

  case trainingConstants.UPDATE_TRAINING_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case trainingConstants.DELETE_TRAINING_SUCCESS:
    return {
      ...state,
    };

  case trainingConstants.DELETE_TRAINING_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default trainingReducer;
