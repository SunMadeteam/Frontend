import { SIGN_IN } from "../../const"


const initialState = {
  staff:[],
}

export const getStaffReducer = (state=initialState, action) => {
  switch (action.type){
    case SIGN_IN:
      return{...state, staff: action.payload}
    default: return state
  }
}