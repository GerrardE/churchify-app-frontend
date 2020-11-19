import branchesConstants from "./branches.constants";

const loading = (data) => ({
  type: branchesConstants.BRANCH_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: branchesConstants.GET_BRANCHES_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: branchesConstants.GET_BRANCHES_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: branchesConstants.GET_BRANCH_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: branchesConstants.GET_BRANCH_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: branchesConstants.CREATE_BRANCH_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: branchesConstants.CREATE_BRANCH_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: branchesConstants.UPDATE_BRANCH_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: branchesConstants.UPDATE_BRANCH_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: branchesConstants.DELETE_BRANCH_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: branchesConstants.DELETE_BRANCH_FAIL,
  payload: data,
});

export {
  loading,
  getItemsSuccess,
  getItemSuccess,
  getItemsFail,
  getItemFail,
  createItemSuccess,
  createItemFail,
  updateItemSuccess,
  updateItemFail,
  deleteItemSuccess,
  deleteItemFail,
};
