import localForage from "localforage";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistConfig } from "redux-persist/es/types";
import { rootReducer } from "app/reducer";
import { rootSaga } from "app/saga";

export interface RootState { }

const sagaMiddleware = createSagaMiddleware();

const initialState: RootState = {};

const persistConfig: PersistConfig<any> = {
  key: "app",
  storage: localForage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
