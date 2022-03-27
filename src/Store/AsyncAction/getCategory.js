import { API_GET_CATEGORY, GET_CATEGORY} from '../../const'
import axios from 'axios'

export const getCategory = () =>{
    return async (dispatch) =>{
        const response = await axios(API_GET_CATEGORY,{
          headers:{
            Authorization: 'Token ' + localStorage.getItem('token-sunMade')
          }
        })
        return dispatch({type: GET_CATEGORY, payload:response.data})
      }
}