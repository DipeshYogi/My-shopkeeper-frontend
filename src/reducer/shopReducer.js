import reducer from '.';
import {GET_CATEGORIES, SET_SHOP_INFO, GET_SHOP_INFO, LOGOUT, 
        UPDATE_SHOP_INFO, GET_ITEM, ADD_ITEM, UPDATE_ITEM,
        DELETE_ITEM, initialEmptyResult} from '../actions/types';
import reducerHelper from './reducerHelper';

const initialState = {
  categories: initialEmptyResult,
  shop_info: initialEmptyResult,
  items: initialEmptyResult,
  shop_items: []
}

const shopReducer = (state=initialState, action) =>{
  switch(action.type){
    case GET_CATEGORIES:
      return{
        ...state,
        categories: reducerHelper.handleRequestData(action)
      }
    case GET_SHOP_INFO:
    case SET_SHOP_INFO:
    case UPDATE_SHOP_INFO:
      return{
        ...state,
        shop_info: reducerHelper.handleRequestData(action)
      }
    case GET_ITEM:
      return{
        ...state,
        items: reducerHelper.handleRequestData(action),
        shop_items: reducerHelper.handleRequestData(action).data
      }
    case ADD_ITEM:
      return{
        ...state,
        shop_items: action.status === 'SUCCESS'? [...state.shop_items, action.payload] : state.shop_items
      }
    case UPDATE_ITEM:
      let upd_itm = []
      if(action.status === 'SUCCESS'){
        upd_itm = state.shop_items.filter(itm => itm.id !== action.payload.id)
        upd_itm.push(action.payload.itm)
      }
      return{
        ...state,
        shop_items: action.status === 'SUCCESS' ? upd_itm : state.shop_items
      }
    case DELETE_ITEM:
      return{
        ...state,
        shop_items: action.status === 'SUCCESS'? state.shop_items.filter(itm => itm.id !== action.payload)
                                               : state.shop_items
      }    
    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default shopReducer;