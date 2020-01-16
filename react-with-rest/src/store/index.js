import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import persistState from 'redux-localstorage';

import { service } from '@/configs';
import reducers from './reducers';

// set global initialState
const initialState = {
  users: service.getValue(localStorage, 'users', {}),
  fetchData: {},
  status: {
    currentUserId: null,
    isLogin: false,
    isLoading: false,
  },
};

export default function createAppStore() {
  // connecting redux & redux-middleware
  const middlewares = [];
  const sagaMiddleware = createSagaMiddleware();

  if (process.env.NODE_ENV === `development`) {
    // eslint-disable-next-line global-require
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
  }
  middlewares.push(sagaMiddleware);

  const enhancer = compose(applyMiddleware(...middlewares), persistState());
  return {
    ...createStore(reducers, initialState, enhancer),
    runSaga: sagaMiddleware.run,
  };
}
