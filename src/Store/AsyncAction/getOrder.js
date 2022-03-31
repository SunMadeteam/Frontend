import axios from "axios";
import { API_GET_ORDER, GET_ORDER } from "../../const";


export const getOrder = () => {
    return async (dispatch) => {
      const response = await axios(API_GET_ORDER, {
        headers: {
          Authorization: "Token " + localStorage.getItem("token-sunMade"),
        },
      });
      dispatch({ type: GET_ORDER, payload: response.data });
    };
  };
  