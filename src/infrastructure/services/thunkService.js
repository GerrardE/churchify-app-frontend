import { toast } from "react-toastify";
import * as apiService from "./api.service";

toast.configure();

const getItems = (actions, path) => async (dispatch) => {
  try {
    dispatch(actions.loading(true));
    const response = await apiService.getResource(path);
    dispatch(actions.loading(false));
    toast.success(response.message);
    dispatch(actions.getItemsSuccess(response));
  } catch (errors) {
    dispatch(actions.loading(false));
    toast.error(errors.message);
    dispatch(actions.getItemsFail(errors));
  }
};

const getItem = (actions, path) => async (dispatch) => {
  try {
    dispatch(actions.loading(true));
    const response = await apiService.getResource(path);
    dispatch(actions.loading(false));
    toast.success(response.message);
    dispatch(actions.getItemSuccess(response));
  } catch (errors) {
    dispatch(actions.loading(false));
    toast.error(errors.message);
    dispatch(actions.getItemFail(errors));
  }
};

const createItem = (actions, path, data) => async (dispatch) => {
  try{
    dispatch(actions.loading(true));
    const response = await apiService.postResource(path, data);
    dispatch(actions.loading(false));
    toast.success(response.message);
    dispatch(actions.createItemSuccess(response));
  } catch (errors) {
    dispatch(actions.loading(false));
    toast.error(errors.message);
    dispatch(actions.createItemFail(errors));
  }
};

const updateItem = (actions, path, data) => async (dispatch) => {
  try{
    dispatch(actions.loading(true));
    const response = await apiService.putResource(path, data);
    dispatch(actions.loading(false));
    toast.success(response.message);
    dispatch(actions.updateItemSuccess(response));
  } catch (errors) {
    dispatch(actions.loading(false));
    toast.error(errors.message);
    dispatch(actions.updateItemFail(errors));
  }
};

const deleteItem = (actions, path) => async (dispatch) => {
  try{
    dispatch(actions.loading(true));
    const response = await apiService.deleteResource(path);
    dispatch(actions.loading(false));
    toast.success(response.message);
    dispatch(actions.deleteItemSuccess(response));
  } catch (errors) {
    dispatch(actions.loading(false));
    toast.error(errors.message);
    dispatch(actions.deleteItemFail(errors));
  }
};

export { getItems, getItem, updateItem, deleteItem, createItem };
