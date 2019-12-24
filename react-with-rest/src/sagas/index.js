import { all, call } from 'redux-saga/effects';
import userSagas from './user';
import postSagas from './post';

function* rootSaga() {
  yield all({
    userSagas: call(userSagas),
    postSagas: call(postSagas),
  });
}

export default rootSaga;
