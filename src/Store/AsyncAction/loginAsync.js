import { API_GET_STAFF, API_POST_LOGIN, GET_STAFF, SIGN_IN } from '../../const'
import { signinFormStart } from '../Actions/Action'
import axios from 'axios'
export const fetchStaff = () =>{
    return async (dispatch) =>{
        const response = await axios(API_GET_STAFF)
        const json = await response.json()
        dispatch({type: GET_STAFF, payload:json})
        console.log(err=>console.log(err.response.data))
      }
}

export const PostLogin = (formData) =>{
  return async (dispatch) =>{
    dispatch(signinFormStart())
    return axios(API_POST_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(formData)
    })
    .then(res => {
      localStorage.setItem('token', res.data.token)
      dispatch({type: SIGN_IN, payload:res.data.token})
    })
    .catch(err => console.log(err.response.data))
  }
}

// const loginUrl = 'https://cors-anywhere.herokuapp.com/https://sunmadebackend.herokuapp.com/api1/v1/register/';

// fetch(loginUrl, {
//   method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//   body: JSON.stringify({
//     number: '+996708983478',
//     name: 'Chyngyz',
//     password: 'password'
//   })
// }).then(res => res.json())
//   .then(json => console.log(json))
//   .catch(e => console.error(e))