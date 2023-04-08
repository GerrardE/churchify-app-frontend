import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import signin from "./signin/signin.reducers";
import users from "./users/users.reducers";
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

import permissions from "./permissions/permissions.reducers";
import roles from "./roles/roles.reducers";
import fellowships from "./fellowships/fellowships.reducers";
import trainings from "./trainings/trainings.reducers";
import dashboard from "./dashboard/dashboard.reducers";
import signoutConstants from "./signout/signout.constants";
import apilogs from "./apilogs/apilogs.reducers";

import { attendancesReducer as attendances } from "./reports/attendances";
import { activityreportsReducer as activityreports } from "./reports/activityreports";
import { membershipsReducer as memberships } from "./reports/memberships";
import { freportsReducer as freports } from "./reports/freports";
import { groupsReducer as groups } from "./reports/groups";
import { trainingreportsReducer as trainingreports } from "./reports/trainingreports";

import { assetsReducer as assets } from "./finances/assets";
import { financesReducer as finances } from "./finances/finances";
import { paymentsReducer as payments } from "./finances/payments";
import { remunerationsReducer as remunerations } from "./finances/remunerations";
import { receiptsReducer as receipts } from "./finances/receipts";

const appReducer = combineReducers({
  signin,
  users,
  zones,
  configs,
  branches,
  preachers,
  fellowships,
  events,
  downloads,
  dashboard,
  categories,
  activities,
  attendances,
  memberships,
  groups,
  activityreports,
  trainingreports,
  roles,
  permissions,
  freports,
  trainings,
  receipts,
  payments,
  remunerations,
  assets,
  finances,
  countries,
  states,
  cities,
  apilogs,
});

const rootReducer = (state, action) => {
  if(action.type === signoutConstants.SIGNOUT_USER){
    localStorage.removeItem("token");
    storage.removeItem("persist:signin");
    state = undefined;
    window.location.href === "/";
  }

  return appReducer(state, action);
};

export default rootReducer;
