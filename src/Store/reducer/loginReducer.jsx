import { SIGNIN_FORM_STARTED,SIGNIN_FORM_SUCCESS } from "../../const"
const initialState={
    number: '',
    password: '',
    loading:false,
}

export const loginReducer = (state=initialState, action) => {
    switch (action.type){
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