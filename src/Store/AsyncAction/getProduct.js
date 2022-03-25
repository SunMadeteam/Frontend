import { API_GET_PRODUCT, GET_PRODUCT } from "../../const";
import axios from "axios";

export const getProduct = (id) => {
    console.log("айдишка",id)
  return async (dispatch) => {
    const response = await axios(`https://sunmadebackend.herokuapp.com/products/${id}/`, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    return dispatch({ type: GET_PRODUCT, payload: response.data });
    // console.log(err=>console.log(err.response.data))
  };
};
