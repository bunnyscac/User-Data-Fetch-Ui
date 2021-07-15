import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';


//CombineReducers helps you keep the same logical division between reducers.
const rootReducer = combineReducers({
  authentication,
  registration,
  users,              
  alert
});

export default rootReducer;