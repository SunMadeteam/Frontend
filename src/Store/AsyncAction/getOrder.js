import axios from "axios";
import { API_GET_ORDER, API_GET_ORDER_COMPLETED, API_GET_ORDER_PROCESSED, GET_ORDER } from "../../const";


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
  
  
export const getOrderProcessed = () => {
  return async (dispatch) => {
    const response = await axios(API_GET_ORDER_PROCESSED, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    dispatch({ type: GET_ORDER, payload: response.data });
  };
};

export const getOrderCompleted = () => {
  return async (dispatch) => {
    const response = await axios(API_GET_ORDER_COMPLETED, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    dispatch({ type: GET_ORDER, payload: response.data });
  };
};
