import {UPDATE_PROFILE} from './types';
import {doAuthPutRequest} from '../services/AuthenticatedActions';

export const updateProfile = (user) => dispatch =>{
  var formdata = new FormData()
  formdata.append("name", user.name)
  formdata.append("email", user.email)
  formdata.append("phone", user.phone)
  formdata.append("date_of_birth", '')

  let url = 'accounts/update/' + user.id +'/';
  dispatch(doAuthPutRequest(url, UPDATE_PROFILE, formdata))
}