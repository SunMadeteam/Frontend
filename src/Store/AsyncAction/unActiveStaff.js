import { API_GET_STAFF_ADMIN_UNACTIVE, API_GET_STAFF_COURIER_UNACTIVE, API_GET_STAFF_FLORIST_UNACTIVE, GET_STAFF } from "../../const";
import axios from "axios";

export const fetchStaffCourierUnActive = () => {
  return async (dispatch) => {
    const response = await axios(API_GET_STAFF_COURIER_UNACTIVE, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    dispatch({ type: GET_STAFF, payload: response.data });
  };
};


export const fetchStaffAdminUnActive = () => {
  return async (dispatch) => {
    const response = await axios(API_GET_STAFF_ADMIN_UNACTIVE, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    dispatch({ type: GET_STAFF, payload: response.data });
  };
};

export const fetchStaffFloristUnActive = () => {
  return async (dispatch) => {
    const response = await axios(API_GET_STAFF_FLORIST_UNACTIVE, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    dispatch({ type: GET_STAFF, payload: response.data });
  };
};
