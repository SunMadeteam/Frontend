import { GET_GOODS_BY_CATEGORY } from "../../const";
import axios from "axios";

export const getGoodsByCategory = (id) => {
    console.log("айдишка",id)
  return async (dispatch) => {
    const response = await axios(`https://sunmadebackend.herokuapp.com/api/products/?category=${id}`, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    return dispatch({ type: GET_GOODS_BY_CATEGORY, payload: response.data });
    // console.log(err=>console.log(err.response.data))
  };
};