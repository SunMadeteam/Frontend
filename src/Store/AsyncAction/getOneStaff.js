import { GET_ONE_STAFF } from "../../const";
import axios from "axios";

export const getOneStaff = (id) => {
    console.log("айдишка",id)
  return async (dispatch) => {
    const response = await axios(`https://sunmadebackend.herokuapp.com/api1/v1/registerstaff/?search=${id}`, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    return dispatch({ type: GET_ONE_STAFF, payload: response.data });
    // console.log(err=>console.log(err.response.data))
  };
};

