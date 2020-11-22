import activitiesConstants from "./activities.constants";

const loading = (data) => ({
  type: activitiesConstants.ACTIVITY_LOADING,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: activitiesConstants.CREATE_ACTIVITY_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: activitiesConstants.CREATE_ACTIVITY_FAIL,
  payload: data,
});

export {
  loading,
  createItemSuccess,
  createItemFail,
};
