import { DELETE_BRANCH } from "../../const";
import axios from "axios";

export const deleteBranch = (id) => {
    console.log("айдишка",id)
  return async (dispatch) => {
    await axios.delete(`https://sunmadebackend.herokuapp.com/api1/v1/branch_detail/${id}/`, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token-sunMade"),
      },
    });
    return dispatch({ type: DELETE_BRANCH, payload:id });
    // console.log(err=>console.log(err.response.data))
  };
};
