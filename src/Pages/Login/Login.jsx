import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PostLogin } from "../../Store/AsyncAction/loginAsync";
import { clearErr } from "../../Store/Actions/Action";

const Login = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const [redEyeOpen, setRedEyeOpen] = useState(false);

  const foggle = () => {
    setRedEyeOpen(!redEyeOpen);
  };

  const [form, setForm] = useState({
    number: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fail = useSelector((state) => state.Failure);
  const onChange = (type, value) => {
    setForm({
      ...form,
      [type]: value,
    });
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("signin", form);
    dispatch(clearErr())
    dispatch(PostLogin(form, navigate));
  };
  const redInputPassword = () =>
    fail.res.message
      ? "Auth_input Auth_input_pass Auth_input__fail"
      : "Auth_input Auth_input_pass";
  const redInputLogin = () =>
    fail.res.message
      ? "Auth_input Auth_input__fail"
      : "Auth_input Auth_input_login";
  const setButton = () =>
    form.number === "" || form.password === ""
      ? "Auth_button Auth_button__grey"
      : "Auth_button";
  // const normalInput = () =>
  //   form.number===""&&
  //   "Auth_input";

  return (
    <div className="Auth_content Auth_back">
      <div className="Auth">
        <form className="Auth_form" onSubmit={onSubmit}>
          <h2 className="hello">Привет!</h2>
          <label className="Auth_label label_margin">Логин</label>
          <input
            className={redInputLogin()}
            placeholder="Введите логин"
            onChange={(e) => onChange("number", e.target.value)}
            required
          />
          <label className="Auth_label">Пароль</label>

          <input 
            className={redInputPassword()}
            placeholder="Введите пароль"
            type={open === false && redEyeOpen === false ? "password" : "text"}
            onChange={(e) => onChange("password", e.target.value)}
            required
          />
          <div className="Auth_eye">
            {open === false ? (
              <div onClick={toggle} className="Auth_close__eye" />
            ) : (
              <div onClick={toggle} className="Auth_open__eye" />
            )}
          </div>
          {fail.res.message && (
            <span className="Auth_failure ">
              Пароль или логин введен неверно
              {redEyeOpen === false ? (
                <div onClick={foggle} className="red_close__eye" />
              ) : (
                <div onClick={foggle} className="red_open__eye" />
              )}
            </span>
          )}
          <button className={setButton()} type="submit">
            ПРОДОЛЖИТЬ
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
