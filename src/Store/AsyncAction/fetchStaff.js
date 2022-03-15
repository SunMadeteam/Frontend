import { API_GET_STAFF, GET_STAFF } from "../../const";
import axios from "axios";

export const fetchStaff = () => {
  return async (dispatch) => {
    const response = await axios(API_GET_STAFF, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    dispatch({ type: GET_STAFF, payload: response.data });
    console.log((err) => console.log(err.response.data));
  };
};
