import { combineReducers } from 'redux';
import userReducer from './user';
import statusReducer from './status';
import postReducer from './post';

const rootReducers = combineReducers({
  users: userReducer,
  status: statusReducer,
  fetchData: postReducer,
});

export default rootReducers;
