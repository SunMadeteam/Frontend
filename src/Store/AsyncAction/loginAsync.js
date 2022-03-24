import { API_POST_LOGIN, SIGN_IN, SIGN_IN_FAILURE } from "../../const";
// import { decodeJwt, signinFormStart } from "../Actions/Action";
import  axios  from "axios";
import jwt_decode from "jwt-decode";

export const PostLogin = (formData, navigate) => {
  return async (dispatch) => {
    // dispatch(signinFormStart());
    return axios(API_POST_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(formData),
    })
      .then((res) => {
        localStorage.setItem("token-sunMade", res.data.token);  
        localStorage.setItem('user', formData.data.number)
        dispatch({ type: SIGN_IN, payload: formData });
        navigate("/");
      })
      .catch((err) =>
        dispatch({ type: SIGN_IN_FAILURE, payload: err.response.data })
      );
  };
};
