import { CHANGE_INPUT_ADRESS } from "../../const";

const initialState = {
  inputAdress: {},
};

export const changeInput = (state = initialState, action) => {
  switch (action.type) {
    // case CHANGE_INPUT_ADRESS:
    //   return {
    //     ...state,
    //     inputAdress: action.payload,
    //   };
    default:
      return state;
  }
};
