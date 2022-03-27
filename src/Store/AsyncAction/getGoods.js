import { API_GET_GOODS, GET_GOODS} from '../../const'
import axios from 'axios'

export const getGoods = () =>{
    return async (dispatch) =>{
        const response = await axios(API_GET_GOODS,{
          headers:{
            Authorization: 'Token ' + localStorage.getItem('token-sunMade')
          }
        })
        return dispatch({type: GET_GOODS, payload:response.data})
      }
}