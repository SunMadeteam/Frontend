import { SHOW_ICON, HIDE_ICON } from "../../const";
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
