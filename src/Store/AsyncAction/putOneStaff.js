import axios from "axios";

export const putOneStaff = (formData) => {
    return async (dispatch) => {
      return axios.put(API_POST_LOGIN, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + localStorage.getItem("token-sunMade"),
        },
        data: JSON.stringify(formData),
      })
        .then(() => {
          dispatch({ type: SIGN_IN, payload: formData });
          navigate("/");
        })
        .catch((err) =>
          dispatch({ type: SIGN_IN_FAILURE, payload: err.response.data })
          // console.log(err.data)
        );
    };
  };
  