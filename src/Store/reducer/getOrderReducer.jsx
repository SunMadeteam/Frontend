import { GET_ORDER } from "../../const";

const initialState = {
    order: {
     
    },
  };
  
  export const getOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER:
          return { ...state, order:action.payload};
        default:
          return state;
      }
  }