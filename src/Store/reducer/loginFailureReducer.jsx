import { REGISTER_FAILURE, SIGN_IN_FAILURE } from "../../const";

const initialState = {
  res: {},
};
export const loginFailureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_FAILURE:
      return {
        ...state,
        res: action.payload,
      };
      case REGISTER_FAILURE:
        return{
          ...state,
          res:action.payload,
        }
    default:
      return state;
  }
};
