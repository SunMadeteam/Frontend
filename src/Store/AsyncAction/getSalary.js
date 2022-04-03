import axios from "axios";
import { GET_SALARY } from "../../const";


export const getSalary = (id) => {
    return async (dispatch) => {
      const response = await axios(`https://sunmadebackend.herokuapp.com/delivery_by/${id}/`, {
        headers: {
          Authorization: "Token " + localStorage.getItem("token-sunMade"),
        },
      });
      dispatch({ type: GET_SALARY, payload: response.data });
    };
  };
  