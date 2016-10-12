'use strict';
import * as types from '../../constants/ActionTypes';

const initialState = {
  message:''
}
export default function resState(state = initialState,action) {
    switch (action.type) {
        case types.SET_SNACKBAR:{
            return Object.assign({},state,{message:action.message});
        }
        default:{
            return state;
        }
    }
}