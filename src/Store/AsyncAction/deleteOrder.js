import { DELETE_ORDER } from "../../const";
import axios from "axios";
import { getGoods } from "./getGoods";

export const deleteOrder = (id) => {
    console.log("айдишка",id)
  return async (dispatch) => {
    await axios.delete(`https://sunmadebackend.herokuapp.com/api/order/${id}/`, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    return dispatch({ type: DELETE_ORDER, payload:id });
    // console.log(err=>console.log(err.response.data))
  };
};
