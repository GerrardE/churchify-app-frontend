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

  default:
    return state;
  }
};

export default trainingReducer;
