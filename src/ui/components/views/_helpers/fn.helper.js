import * as statesActions from "@domain/redux/states/states.actions";
import * as branchActions from "@domain/redux/branches/branches.actions";
import * as citiesActions from "@domain/redux/cities/cities.actions";
import { getItems } from "@infrastructure/services/thunkService";
import { store } from "@application/config/store/store";

export const branchesparams = "branches";
export const countryparams = "countries";
export const countryparam = "country";
export const statesparams = "states";
export const stateparam = "state";
export const zonesparams = "zones";
export const citiesparams = "cities";

export const dispatch = store.dispatch;

export const getStates = (id) => {
  dispatch(getItems(statesActions, `${statesparams}/${id}/${countryparam}`));
};

export const getCities = (id) => {
  dispatch(getItems(citiesActions, `${citiesparams}/${id}/${stateparam}`));
};

export const getBranches = (id) => {
  dispatch(getItems(branchActions, `${branchesparams}/${id}/${zonesparams}`));
};
