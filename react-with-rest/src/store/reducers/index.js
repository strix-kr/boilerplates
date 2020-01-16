import { combineReducers } from 'redux';
import userReducer from './user';
import statusReducer from './status';
import postReducer from './post';

const reducers = combineReducers({
  users: userReducer,
  status: statusReducer,
  fetchData: postReducer,
});

export default reducers;