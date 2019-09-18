import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ReduxThunk from "redux-thunk";
import * as reducers from "./state";

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer({
  key: "root",
  storage
}, rootReducer);
const enhancer = applyMiddleware(ReduxThunk);

const store =
  process.env.NODE_ENV === "development"
    ? createStore(
      persistedReducer,
      composeWithDevTools(applyMiddleware(ReduxThunk))
    )
    : createStore(persistedReducer, enhancer);

const persistor = persistStore(store);

export { store, persistor };
