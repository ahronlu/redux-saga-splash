import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

const configureStore = () => {
  const sageMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sageMiddleware),
      window.devToolsExtension && window.devToolsExtension()
    )
  );
  sageMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
