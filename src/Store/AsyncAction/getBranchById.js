import { GET_BRANCH_BY_ID } from "../../const";
import axios from "axios";

export const getBranchById = (id) => {
  console.log("айдишка", id);
  return async (dispatch) => {
    const response = await axios(
      `https://sunmadebackend.herokuapp.com/api1/v1/branch_detail/${id}`,
      {
        headers: {
          Authorization: "Token " + localStorage.getItem("token-sunMade"),
        },
      }
    );
    return dispatch({ type: GET_BRANCH_BY_ID, payload: response.data });
    // console.log(err=>console.log(err.response.data))
  };
};
