import { SHOW_ICON, HIDE_ICON, USER_TYPE, CLEAR_ERR, JWT_TOKEN, CLEAR_RES, IS_ACTIVE, CHANGE_GOODS_INPUT } from "../../const";
import { SIGNIN_FORM_STARTED, SIGNIN_FORM_SUCCESS } from "../../const";
import jwt_decode from "jwt-decode";

export const ShowIcon = () => ({
  type: SHOW_ICON,
});
export const HideIcon = () => ({
  type: HIDE_ICON,
});

export const signinFormStart = () => ({ type: SIGNIN_FORM_STARTED });
export const signinFormSucc = (payload) => ({
  type: SIGNIN_FORM_SUCCESS,
  payload,
});
export const usertype = (formData) => ({type:USER_TYPE, payload:formData})
export const clearErr = () =>({type:CLEAR_ERR})
export const clearRes = () =>({type:CLEAR_RES})
export const decodeJwt = () => {
  const token = localStorage.getItem('token-sunMade')
  const decoded = jwt_decode(token);
  console.log(decoded)
  return { type:JWT_TOKEN }
}
export const changeGoodsInput = (text, title) =>({type:CHANGE_GOODS_INPUT, payload:text, title:title})
// export const changeInput = () =>({type:})


// export const isActive = ()=>({type:IS_ACTIVE, })