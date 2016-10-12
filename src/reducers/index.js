'use strict';
import { combineReducers } from 'redux';
import user from './user';
import login from './login';
import state from './state';

const rootReducer = combineReducers({
    user,login,state
});

export default rootReducer;