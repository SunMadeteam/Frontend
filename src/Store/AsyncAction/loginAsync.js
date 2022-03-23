import { API_POST_LOGIN, SIGN_IN, SIGN_IN_FAILURE } from "../../const";
import { signinFormStart } from "../Actions/Action";
import  axios  from "axios";

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
        navigate("/");
        localStorage.setItem("token-sunMade", res.data.token);
        dispatch({ type: SIGN_IN, payload: formData });
      })
      .catch((err) =>
        dispatch({ type: SIGN_IN_FAILURE, payload: err.response.data })
      );
  };
};
