import categoriesConstants from "./categories.constants";

const loading = (data) => ({
  type: categoriesConstants.CATEGORY_LOADING,
  payload: data,
});

/* GET ITEMS */
const getItemsSuccess = (data) => ({
  type: categoriesConstants.GET_CATEGORIES_SUCCESS,
  payload: data,
});

const getItemsFail = (data) => ({
  type: categoriesConstants.GET_CATEGORIES_FAIL,
  payload: data,
});

/* GET ITEM */
const getItemSuccess = (data) => ({
  type: categoriesConstants.GET_CATEGORY_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: categoriesConstants.GET_CATEGORY_FAIL,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: categoriesConstants.CREATE_CATEGORY_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: categoriesConstants.CREATE_CATEGORY_FAIL,
  payload: data,
});

/* UPDATE ITEM */
const updateItemSuccess = (data) => ({
  type: categoriesConstants.UPDATE_CATEGORY_SUCCESS,
  payload: data,
});

const updateItemFail = (data) => ({
  type: categoriesConstants.UPDATE_CATEGORY_FAIL,
  payload: data,
});

/* DELETE ITEM */
const deleteItemSuccess = (data) => ({
  type: categoriesConstants.DELETE_CATEGORY_SUCCESS,
  payload: data,
});

const deleteItemFail = (data) => ({
  type: categoriesConstants.DELETE_CATEGORY_FAIL,
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
