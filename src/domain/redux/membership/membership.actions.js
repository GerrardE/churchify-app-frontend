import membershipConstants from "./membership.constants";

const loading = (data) => ({
  type: membershipConstants.MEMBERSHIP_LOADING,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: membershipConstants.CREATE_MEMBERSHIP_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: membershipConstants.CREATE_MEMBERSHIP_FAIL,
  payload: data,
});

export {
  loading,
  createItemSuccess,
  createItemFail,
};
