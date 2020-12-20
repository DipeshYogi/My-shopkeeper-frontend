import { REGISTER, LOGIN, LOGOUT, UPDATE_PROFILE, initialEmptyResult } from '../actions/types';
import reducerHelper from './reducerHelper';

const initialState = {
  isAuthenticated: false,
  isRegistered: false,
  userdata: initialEmptyResult
}

export const authReducer = (state=initialState, action) =>{
  switch(action.type){
    case REGISTER:
      return{
        ...state,
        isRegistered: action.status ==='SUCCESS' ? true : false,
        userdata: reducerHelper.handleRequestData(action).data.userdata
      }
    case LOGIN:
      return{
        ...state,
        isAuthenticated: action.status ==='SUCCESS' ? true : false,
        userdata: reducerHelper.handleRequestData(action).data.userdata
      }
    case UPDATE_PROFILE:
      return{
        ...state,
        userdata: action.status ==='SUCCESS'?reducerHelper.handleRequestData(action).data.userdata: state.userdata
      }
    case LOGOUT:
      return initialState
      
    default:
      return state
  }
}

export default authReducer;