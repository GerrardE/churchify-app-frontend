import * as apiService from "./api.service";

const getItems = (actions, path) => async (dispatch, getState) => {
  const state = getState();

  const { signin } = state;

  let token = signin.user ? signin.user.token : "token";

  try {
    dispatch(actions.loading(true));
    const response = await apiService.getResource(path, token);
    dispatch(actions.loading(false));
    dispatch(actions.getItemsSuccess(response));
  } catch (errors) {
    dispatch(actions.loading(false));
    dispatch(actions.getItemsFail(errors));
  }
};

const getItem = (actions, path) => async (dispatch, getState) => {
  const state = getState();

  const { signin } = state;

  let token = signin.user ? signin.user.token : "token";

  try {
    dispatch(actions.loading(true));
    const response = await apiService.getResource(path, token);
    dispatch(actions.loading(false));
    dispatch(actions.getItemSuccess(response));
  } catch (errors) {
    dispatch(actions.loading(false));
    dispatch(actions.getItemFail(errors));
  }
};

const createItem = (actions, path, data) => async (dispatch, getState) => {
  const state = getState();

  const { signin } = state;
  
  let token = signin.user ? signin.user.token : "token";

  try{
    dispatch(actions.loading(true));
    const response = await apiService.postResource(path, data, token);
    dispatch(actions.loading(false));
    dispatch(actions.createItemSuccess(response));
  } catch (errors) {
    dispatch(actions.loading(false));
    dispatch(actions.createItemFail(errors));
  }
};

const updateItem = (actions, path, data) => async (dispatch, getState) => {
  const state = getState();

  const { signin } = state;
  
  let token = signin.user ? signin.user.token : "token";

  try{
    dispatch(actions.loading(true));
    const response = await apiService.putResource(path, data, token);
    dispatch(actions.loading(false));
    dispatch(actions.updateItemSuccess(response));
  } catch (errors) {
    dispatch(actions.loading(false));
    dispatch(actions.updateItemFail(errors));
  }
};

const deleteItem = (actions, path) => async (dispatch, getState) => {
  const state = getState();

  const { signin } = state;
  
  let token = signin.user ? signin.user.token : "token";

  try{
    dispatch(actions.loading(true));
    const response = await apiService.deleteResource(path, token);
    dispatch(actions.loading(false));
    dispatch(actions.deleteItemSuccess(response));
  } catch (errors) {
    dispatch(actions.loading(false));
    dispatch(actions.deleteItemFail(errors));
  }
};

export { getItems, getItem, updateItem, deleteItem, createItem };
