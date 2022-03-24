import {
  REGISTER_STAFF,
  SIGNIN_FORM_STARTED,
  SIGNIN_FORM_SUCCESS,
  SIGN_IN,
  USER_TYPE,
} from "../../const";
const initialState = {
  login: {},
  register: {},
  usertype:"",
  loading: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        login: action.payload,
      };
    case REGISTER_STAFF:
      return {
        ...state,
        register: action.payload,
      };
    case USER_TYPE:
      return{
        ...state,
        usertype:action.payload
      }
    case SIGNIN_FORM_STARTED:
      return {
        ...state,
        loading: true,
      };
    case SIGNIN_FORM_SUCCESS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
