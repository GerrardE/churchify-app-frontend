import freportsConstants from "./freports.constants";

const loading = (data) => ({
  type: freportsConstants.FREPORT_LOADING,
  payload: data,
});

/* CREATE ITEM */
const createItemSuccess = (data) => ({
  type: freportsConstants.CREATE_FREPORT_SUCCESS,
  payload: data,
});

const createItemFail = (data) => ({
  type: freportsConstants.CREATE_FREPORT_FAIL,
  payload: data,
});

export {
  loading,
  createItemSuccess,
  createItemFail,
};
