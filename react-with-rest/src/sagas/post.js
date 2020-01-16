import { takeEvery, put } from 'redux-saga/effects';
import { status } from '@/store/actions';
import { api, Fetcher } from '@/configs';
import { postsTypes } from '@/store/types'

function* getFetchData({ payload }) {
  const { url } = api[payload]();

  yield put({ type: status.LOADING_BEGIN });
  const res = yield Fetcher.get(url);

  // get post data
  const list = res.data.map(({ id }) => {
    const { url: commentUrl } = api.comments(id);
    return Fetcher.get(commentUrl);
  });

  // get comment data
  const commentData = yield Fetcher.all(list);
  const comments = {};
  commentData.forEach(obj => {
    if (obj.data.length > 0) {
      const key = obj.data[0].postId;
      comments[key] = obj.data;
    }
  });

  // set post data to store state
  yield put({ type: postsTypes.SET_ITEMS, payload: res.data });
  // set comment data to store state
  yield put({ type: postsTypes.SET_COMMENTS, payload: comments });
  yield put({ type: status.LOADING_END });
}

export default function* watcher() {
  yield takeEvery(postsTypes.FETCH_DATA_ASYNC, getFetchData);
}
