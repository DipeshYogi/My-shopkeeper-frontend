import {GET_CATEGORIES, SET_SHOP_INFO, GET_SHOP_INFO, UPDATE_SHOP_INFO, ADD_ITEM,
        GET_ITEM, UPDATE_ITEM, DELETE_ITEM} from './types';
import {doGetRequest} from '../services/ActionServices';
import {doAuthGetRequest, doAuthPostRequest, doAuthPutRequest,
        doAuthDeleteRequest} from '../services/AuthenticatedActions';

export const getCategories = () => dispatch=>{
    let url = 'shopkeeper/categories/';
    dispatch(doGetRequest(url, GET_CATEGORIES));
}

export const getShopInfo = () => dispatch => {
    let url = 'shopkeeper/shop-profile-detail/';
    dispatch(doAuthGetRequest(url, GET_SHOP_INFO))
}

export const setShopInfo = (shop_data) => dispatch =>{
    let url = 'shopkeeper/shop-profile/';
    let formData = new FormData();
    formData.append('shop_name',shop_data.shop_name)
    formData.append('category', shop_data.category)
    formData.append('is_verified', shop_data.is_verified)
    formData.append('baggit_support', shop_data.baggit_support)
    formData.append('free_delivery', shop_data.free_delivery)

    dispatch(doAuthPostRequest(url, SET_SHOP_INFO, formData))
}

export const updateShopInfo = (shop_data) => dispatch =>{
    let url = 'shopkeeper/shop-profile-detail/';
    let formData = new FormData();
    formData.append('shop_name',shop_data.shop_name)
    formData.append('category', shop_data.category)
    formData.append('is_verified', shop_data.is_verified)
    formData.append('baggit_support', shop_data.baggit_support)
    formData.append('free_delivery', shop_data.free_delivery)

    dispatch(doAuthPutRequest(url, UPDATE_SHOP_INFO, formData))
}

export const addItems = (itm) => dispatch =>{
  let url = 'shopkeeper/shop-profile/items/add/';
  let formData = new FormData();
  formData.append('item_name', itm.item_name)
  formData.append('brand', itm.brand)
  formData.append('list_price', itm.list_price)
  formData.append('uom', itm.uom)
  formData.append('discount', itm.discount)
  let payload = itm;

  dispatch(doAuthPostRequest(url, ADD_ITEM, formData, payload))
}

export const getItems = () => dispatch =>{
  let url = 'shopkeeper/shop-profile/items/';

  dispatch(doAuthGetRequest(url, GET_ITEM))
}

export const updateItems = (itm, id) => dispatch =>{
  let url = 'shopkeeper/shop-profile/items/update/'+id+'/';
  let formData = new FormData();
  formData.append('item_name', itm.item_name)
  formData.append('brand', itm.brand)
  formData.append('list_price', itm.list_price)
  formData.append('uom', itm.uom)
  formData.append('discount', itm.discount)
  console.log(itm)
  let payload = {"itm":itm, "id":id};

  dispatch(doAuthPutRequest(url, UPDATE_ITEM, formData, payload))
}

export const deleteItems = (id) => dispatch =>{
  let url = 'shopkeeper/shop-profile/items/update/'+id+'/';
  let payload = id;
  let formData = undefined;
  dispatch(doAuthDeleteRequest(url, DELETE_ITEM, formData, payload))
}

