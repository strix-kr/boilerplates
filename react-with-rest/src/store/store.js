import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import persistState from 'redux-localstorage';

import { service } from '@/configs';
import rootSagas from '@/sagas';
import rootReducers from '@/reducers';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  users: service.getValue(localStorage, 'users', {}),
  fetchData: {},
  status: {
    currentUserId: null,
    isLogin: false,
    isLoading: false,
  },
};

const enhancer = compose(applyMiddleware(sagaMiddleware), persistState());

const store = createStore(rootReducers, initialState, enhancer);

sagaMiddleware.run(rootSagas);

export default store;
