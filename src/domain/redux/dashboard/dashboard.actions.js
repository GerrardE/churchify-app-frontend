import dashboardConstants from "./dashboard.constants";

const loading = (data) => ({
  type: dashboardConstants.DASHBOARD_LOADING,
  payload: data,
});

/* GET ONE */
const getItemSuccess = (data) => ({
  type: dashboardConstants.GET_DASHBOARD_SUCCESS,
  payload: data,
});

const getItemFail = (data) => ({
  type: dashboardConstants.GET_DASHBOARD_FAIL,
  payload: data,
});

export {
  loading,
  getItemSuccess,
  getItemFail,
};
