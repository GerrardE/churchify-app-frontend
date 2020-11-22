import groupConstants from "./groups.constants";

const loading = (data) => ({
  type: groupConstants.GROUP_LOADING,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: groupConstants.CREATE_GROUP_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: groupConstants.CREATE_GROUP_FAIL,
  payload: data,
});

export {
  loading,
  createItemSuccess,
  createItemFail,
};
