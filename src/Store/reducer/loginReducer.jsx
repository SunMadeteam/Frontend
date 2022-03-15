import { SIGNIN_FORM_STARTED,SIGNIN_FORM_SUCCESS, SIGN_IN } from "../../const"
const initialState={
    login:{},
    loading:false,
}

export const loginReducer = (state=initialState, action) => {
    switch (action.type){
        case SIGN_IN:
            return{
                ...state,
                login:action.payload
            }
        case SIGNIN_FORM_STARTED:
            return{
                ...state,
                loading:true,
            }
        case SIGNIN_FORM_SUCCESS:
            return {
                ...state,
                loading:true,
            }
            default:
                return state;
    }   
}