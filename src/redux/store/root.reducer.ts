import {combineReducers} from 'redux';
import user from '../slice/user.slice';
import users from '../slice/users.slice';
import loader from '../slice/loader.slice';
import count from '../slice/count.slice';
import filter from '../slice/filter.slice';

export const rootReducer = combineReducers({
  user: user,
  users: users,
  loader: loader,
  count: count,
  filter: filter,
});

export type RootState = ReturnType<typeof rootReducer>;
