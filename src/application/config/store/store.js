import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import index from "@domain/redux";

const logger = createLogger({
  /* https://github.com/evgenyrodionov/redux-logger */
  collapsed: true,
  diff: true,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["signin", "countries", "configs"],
};

const persistedReducer = persistReducer(persistConfig, index);

const initialState = {};

const middleware = [thunk];
const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware, logger)),
);

const persistor = persistStore(store);

export { store, persistor };
