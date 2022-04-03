import { GET_ORDER_BY_ID } from "../../const";
import axios from "axios";

export const getOrderById = (id) => {
  console.log("айдишка", id);
  return async (dispatch) => {
    const response = await axios(
      `https://sunmadebackend.herokuapp.com/api/order/${id}`,
      {
        headers: {
          Authorization: "Token " + localStorage.getItem("token-sunMade"),
        },
      }
    );
    return dispatch({ type: GET_ORDER_BY_ID, payload: response.data });
    // console.log(err=>console.log(err.response.data))
  };
};
