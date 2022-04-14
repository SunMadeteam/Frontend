import { GET_ORDER_DETAIL } from "../../const";
import axios from "axios";

export const getOrderDetail = (id) => {
  console.log("айдишка", id);
  return async (dispatch) => {
    const response = await axios(
      `https://sunmadebackend.herokuapp.com/api/order_detail/?order=${id}`,
      {
        headers: {
          Authorization: "Token " + localStorage.getItem("token-sunMade"),
        },
      }
    );
    return dispatch({ type: GET_ORDER_DETAIL, payload: response.data });
    // console.log(err=>console.log(err.response.data))
  };
};
