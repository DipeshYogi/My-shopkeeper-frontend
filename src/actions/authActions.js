import { LOGIN, LOGOUT, REGISTER } from './types';
import { doPostRequest} from '../services/AuthActionServices';


export const loginUser = (email, password) => dispatch =>{
    let url = 'accounts/token/';
    let formData = new FormData();
    formData.append('email', email)
    formData.append('password', password)

    dispatch(doPostRequest(url, LOGIN, formData))
}

export const logoutUser = () => dispatch =>{
    dispatch({type:LOGOUT})
}

export const registerUser = (user) => dispatch =>{
    let url = 'accounts/register/';
    let formData = new FormData();
    formData.append('user_type', 'SHOPKEEPER')
    formData.append('name', user.username)
    formData.append('email', user.email)
    formData.append('phone', user.phno)
    formData.append('password', user.pass1)
    formData.append('date_of_birth', '')

    dispatch(doPostRequest(url, REGISTER, formData))
}