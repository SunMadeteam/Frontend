import { CLEAR_ERR, CLEAR_RES, REGISTER_FAILURE, SIGN_IN_FAILURE } from "../../const";

const initialState = {
  res: {},
  err:{},
};
export const loginFailureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_FAILURE:
      return {
        ...state,
        res:action.payload,
      };
      case CLEAR_ERR:
        return{
          ...state,
          err:{},
        }
        case CLEAR_RES:
        return{
          ...state,
          res:{},
        }
      case REGISTER_FAILURE:
        return{
          ...state,
          err:action.payload,
        }
    default:
      return state;
  }
};
