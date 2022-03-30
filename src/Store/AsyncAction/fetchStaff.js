import { API_GET_STAFF_ADMIN, API_GET_STAFF_COURIER, API_GET_STAFF_FLORIST, GET_STAFF } from "../../const";
import axios from "axios";

export const fetchStaffCourier = () => {
  return async (dispatch) => {
    const response = await axios(API_GET_STAFF_COURIER, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    dispatch({ type: GET_STAFF, payload: response.data });
  };
};


export const fetchStaffAdmin = () => {
  return async (dispatch) => {
    const response = await axios(API_GET_STAFF_ADMIN, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    dispatch({ type: GET_STAFF, payload: response.data });
  };
};

export const fetchStaffFlorist = () => {
  return async (dispatch) => {
    const response = await axios(API_GET_STAFF_FLORIST, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    dispatch({ type: GET_STAFF, payload: response.data });
  };
};
