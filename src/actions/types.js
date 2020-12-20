// auth types
export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

//Status
export const SUCCESS = "SUCCESS";
export const INITIAL = "INITIAL";
export const FAILURE = "FAILURE";
export const STARTING = "STARTING";

//Shop info
export const GET_CATEGORIES = "GET_CATEGORIES";
export const SET_SHOP_INFO = "SET_SHOP_INFO";
export const GET_SHOP_INFO = "GET_SHOP_INFO";
export const UPDATE_SHOP_INFO = "UPDATE_SHOP_INFO";
export const ADD_ITEM = "ADD_ITEM";
export const GET_ITEM = "GET_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";

//Profile actions
export const UPDATE_PROFILE = "UPDATE_PROFILE";

// empty initial data
export const initialEmptyResult = {
    data: [],
    error: '',
    isLoading: false,
    status: INITIAL
};