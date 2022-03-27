import { DELETE_PRODUCT, GET_GOODS, PAGINATION_GOODS } from "../../const";
import axios from "axios";
import { getGoods } from "./getGoods";

export const deleteProduct = (id) => {
    console.log("айдишка",id)
  return async (dispatch) => {
    await axios.delete(`https://sunmadebackend.herokuapp.com/products/${id}/`, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    return dispatch({ type: DELETE_PRODUCT });
    // console.log(err=>console.log(err.response.data))
  };
};
