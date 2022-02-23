import {AiOutlineEye} from "react-icons/ai"
import {RiEyeCloseLine} from "react-icons/ri"
import {HIDE_ICON, SHOW_ICON} from "../../const/index"

const initialState={
    eye:2
}

export const ShowIconReducer=(state=initialState, action)=>{
    switch (action.type) {
        case SHOW_ICON:
            return{
                ...state, eye:<AiOutlineEye />
            }
        case HIDE_ICON: 
        return{
            ...state, eye:<RiEyeCloseLine/>
        }
        default:
            return state
    }
}
