
import { API_GET_STAFF, API_POST_LOGIN, SIGN_IN } from '../../const'

export const fetchStaff = () =>{
    return async (dispatch) =>{
        const response = await fetch(API_GET_STAFF)
        const json = await response.json()
        dispatch({type: SIGN_IN, payload:json})
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