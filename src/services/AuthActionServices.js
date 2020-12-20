import { STARTING, SUCCESS, FAILURE } from '../actions/types';
import requestInstance from './RequestInstance';


export const doPostRequest = (url, actionType, formData) => (dispatch) =>{
  return(
    dispatch({type:actionType, status:STARTING, response:undefined}),
    requestInstance.post(url, formData)
      .then(res =>{
        if(res.data.access){
          localStorage.setItem('access_token',res.data.access)
          localStorage.setItem('refresh_token',res.data.refresh)
        }
        dispatch({type:actionType, status:SUCCESS, response:res.data})
      }) 
      .catch(err => {
        dispatch({type:actionType, status:FAILURE, response:err})
      })
  )
}