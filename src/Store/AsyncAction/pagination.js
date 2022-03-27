import { PAGINATION_GOODS, PAGINATION_STAFF } from "../../const";
import axios from "axios";

export const paginationGoods = (next) => {
  return async (dispatch) => {
    const response = await axios(next, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    return dispatch({ type: PAGINATION_GOODS, payload: response.data });
  };
};

export const paginationStaff = (next) => {
  return async (dispatch) => {
    const response = await axios(next, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    return dispatch({ type: PAGINATION_STAFF, payload: response.data });
  };
};
