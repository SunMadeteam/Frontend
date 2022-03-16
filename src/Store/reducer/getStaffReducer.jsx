import { GET_STAFF } from "../../const"


const initialState = {
  staff:[]
}

export const getStaffReducer = (state=initialState, action) => {
  switch (action.type){
    case GET_STAFF:
      return{...state, staff: action.payload}
    default: return state
  }
}