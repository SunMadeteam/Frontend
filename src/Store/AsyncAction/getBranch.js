import { API_GET_BRANCH, GET_BRANCH } from '../../const'
import axios from 'axios'

export const getBranch = () =>{
    return async (dispatch) =>{
        const response = await axios(API_GET_BRANCH,{
          headers:{
            Authorization: 'Token ' + localStorage.getItem('token-sunMade')
          }
        })
        return dispatch({type: GET_BRANCH, payload:response.data})
      }
}