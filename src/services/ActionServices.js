import { STARTING, SUCCESS, FAILURE } from '../actions/types';
import requestInstance from './RequestInstance';

export const doGetRequest = (url, actionType) => (dispatch) =>{
  return(
    dispatch({type: actionType, status: STARTING, response:undefined}),
    requestInstance.get(url)
      .then(res => dispatch({type: actionType, status: SUCCESS, response: res.data}))
      .catch(err => dispatch({type: actionType, status: FAILURE, response: err}))
  ) 
}

export const doPostRequest = (url, actionType, formData) => (dispatch) =>{
  return(
    dispatch({type:actionType, status:STARTING, response:undefined}),
    requestInstance.post(url, formData)
      .then(res =>{
        dispatch({type:actionType, status:SUCCESS, response:res.data})
      }) 
      .catch(err => {
        dispatch({type:actionType, status:FAILURE, response:err})
      })
  )
}