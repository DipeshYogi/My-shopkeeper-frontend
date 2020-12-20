import { STARTING, SUCCESS, FAILURE } from '../actions/types';
import requestInstance from './RequestInstance';

export const doAuthGetRequest = (url, actionType) => (dispatch) =>{
  let auth_token = localStorage.getItem('access_token')
  if(auth_token){
    requestInstance.defaults.headers['Authorization'] = 'Bearer ' + auth_token;
  }
  return(
    dispatch({type: actionType, status: STARTING, response:undefined}),
    requestInstance.get(url)
      .then(res => dispatch({type: actionType, status: SUCCESS, response: res.data}))
      .catch(err => dispatch({type: actionType, status: FAILURE, response: err}))
  ) 
}

export const doAuthPostRequest = (url, actionType, formData, payload) => (dispatch) =>{
  let auth_token = localStorage.getItem('access_token')
  if(auth_token){
    requestInstance.defaults.headers['Authorization'] = 'Bearer ' + auth_token;
  }
  return(
    dispatch({type:actionType, status:STARTING, response:undefined}),
    requestInstance.post(url, formData)
      .then(res =>{
        dispatch({type:actionType, status:SUCCESS, response:res.data, payload})
      }) 
      .catch(err => {
        dispatch({type:actionType, status:FAILURE, response:err})
      })
  )
}

export const doAuthPutRequest = (url, actionType, formData, payload) => (dispatch) =>{
  let auth_token = localStorage.getItem('access_token')
  if(auth_token){
    requestInstance.defaults.headers['Authorization'] = 'Bearer ' + auth_token;
  }

  return(
    dispatch({type:actionType, status:STARTING, response:undefined}),
    requestInstance.put(url, formData)
      .then(res =>{
        dispatch({type:actionType, status:SUCCESS, response:res.data, payload:payload})
      }) 
      .catch(err => {
        dispatch({type:actionType, status:FAILURE, response:err})
      })
  )
}

export const doAuthDeleteRequest = (url, actionType, formData, payload) => (dispatch) =>{
  let auth_token = localStorage.getItem('access_token')
  if(auth_token){
    requestInstance.defaults.headers['Authorization'] = 'Bearer ' + auth_token;
  }

  return(
    dispatch({type:actionType, status:STARTING, response:undefined}),
    requestInstance.delete(url, formData)
      .then(res =>{
        dispatch({type:actionType, status:SUCCESS, response:res.data, payload:payload})
      }) 
      .catch(err => {
        dispatch({type:actionType, status:FAILURE, response:err})
      })
  )
}