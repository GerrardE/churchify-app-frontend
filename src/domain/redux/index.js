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
import activities from "./activities/activities.reducers";
import attendances from "./attendance/attendance.reducers";
import memberships from "./membership/membership.reducers";
import groups from "./groups/groups.reducers";
import permissions from "./permissions/permissions.reducers";
import roles from "./roles/roles.reducers";
import fellowships from "./fellowships/fellowships.reducers";
import freports from "./freports/freports.reducers";
import trainings from "./trainings/trainings.reducers";
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
  activities,
  attendances,
  memberships,
  groups,
  roles,
  permissions,
  freports,
  trainings,
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
