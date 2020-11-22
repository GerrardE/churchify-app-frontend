import trainingConstants from "./trainings.constants";

const loading = (data) => ({
  type: trainingConstants.TRAINING_LOADING,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: trainingConstants.CREATE_TRAINING_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: trainingConstants.CREATE_TRAINING_FAIL,
  payload: data,
});

export {
  loading,
  createItemSuccess,
  createItemFail,
};
