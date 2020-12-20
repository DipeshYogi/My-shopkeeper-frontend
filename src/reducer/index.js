import { combineReducers } from 'redux';
import authReducer from './authReducer';
import shopReducer from './shopReducer';

export default combineReducers({
    authReducer, shopReducer
})