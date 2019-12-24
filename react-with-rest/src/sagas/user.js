import { takeEvery, put } from 'redux-saga/effects';
import { user } from '@/actions';
import { Fetcher } from '@/configs';

function* putUserData(method, paylaod) {
  const { url, param } = paylaod;
  const res = yield Fetcher[method](url, param);
  return res.data;
}

function* createUser({ payload }) {
  const data = yield putUserData('post', payload);
  // fixed user id
  data.id = 1;
  yield put({ type: user.CREATE, payload: data });
}

function* updateUser({ payload }) {
  const data = yield putUserData('put', payload);
  yield put({ type: user.UPDATE, payload: data });
}

export default function* watcher() {
  yield takeEvery(user.CREATE_ASYNC, createUser);
  yield takeEvery(user.UPDATE_ASYNC, updateUser);
}
