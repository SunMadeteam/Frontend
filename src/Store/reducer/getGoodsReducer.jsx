import { GET_GOODS } from "../../const"

const initialState = {
    goods:{
      products:[]
    },
}

export const getGoodsReducer=(state=initialState, action)=>{
    switch (action.type){
        case GET_GOODS:
          return{...state, goods: action.payload}
        default: return state
      }
}