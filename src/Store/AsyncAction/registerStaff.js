import  axios  from "axios";
import { API_POST_REGISTER_STAFF, REGISTER_FAILURE, REGISTER_STAFF } from "../../const";


export const registerStaff = (formData) => {
  console.log("в экшыне",formData)
    return async (dispatch) => {
      return axios(API_POST_REGISTER_STAFF, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Token ' + localStorage.getItem('token-sunMade')
        },
        data: JSON.stringify(formData), 
      })
        .then(() => {
          // navigate("/Login");
        //   localStorage.setItem("token-sunMade", res.data.token);
          dispatch({ type: REGISTER_STAFF, payload: formData });
        })
        .catch((err) =>
          dispatch({ type: REGISTER_FAILURE, payload: err.response.data })
        );
    };
  };