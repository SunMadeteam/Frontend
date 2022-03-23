import { SHOW_ICON, HIDE_ICON, USER_TYPE } from "../../const";
import { SIGNIN_FORM_STARTED, SIGNIN_FORM_SUCCESS } from "../../const";
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