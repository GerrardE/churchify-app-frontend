import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { routes, ProtectedRoute } from "@ui/routes";
import { store, persistor } from "@application/config/store/store";
import "@ui/assets/styles/index.scss";
import "@ui/assets/styles/custom.css";
import "react-toastify/dist/ReactToastify.css";
import "@ui/assets/scripts/index";

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <Switch>
              {routes.map((route) => {
                if (route.protected) {
                  return (
                    <ProtectedRoute
                      exact
                      key={route.path}
                      path={route.path}
                      component={route.component}
                    />
                  );
                }
                return (
                  <Route
                    exact
                    key={route.path}
                    path={route.path}
                    component={route.component}
                  />
                );
              })}
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </Fragment>
  );
}
