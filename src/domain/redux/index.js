import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import signin from "./signin/signin.reducers";
import zones from "./zones/zones.reducers";
import countries from "./countries/countries.reducers";
import cities from "./cities/cities.reducers";
import states from "./states/states.reducers";
import configs from "./configs/configs.reducers";
import events from "./events/events.reducers";
import downloads from "./downloads/downloads.reducers";
import categories from "./categories/categories.reducers";
import branches from "./branches/branches.reducers";
import preachers from "./preachers/preachers.reducers";
import fellowships from "./fellowships/fellowships.reducers";
import signoutConstants from "./signout/signout.constants";

const appReducer = combineReducers({
  signin,
  zones,
  configs,
  branches,
  preachers,
  fellowships,
  events,
  downloads,
  categories,
  countries,
  states,
  cities,
});

const rootReducer = (state, action) => {
  if(action.type === signoutConstants.SIGNOUT_USER){
    localStorage.removeItem("token");
    storage.removeItem("persist:signin");
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
