import { takeEvery, put } from 'redux-saga/effects';
import { userTypes } from '@/store/types';
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
  yield put({ type: userTypes.CREATE, payload: data });
}

function* updateUser({ payload }) {
  const data = yield putUserData('put', payload);
  yield put({ type: userTypes.UPDATE, payload: data });
}

export default function* watcher() {
  yield takeEvery(userTypes.CREATE_ASYNC, createUser);
  yield takeEvery(userTypes.UPDATE_ASYNC, updateUser);
}
