import React from "react";
import "./AddBtn.scss";
import { useState } from "react";
import { ModalAdd } from "./ModalAdd/ModalAdd";
import { AddInfo } from "./AddInfo/AddInfo";
import { registerStaff } from "../../../Store/AsyncAction/registerStaff";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddBtn = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  const [eyeOpen, setEyeOpen] = useState(false);

  const foggle = () => {
    setEyeOpen(!eyeOpen);
  };
  const [modalActive, setModalActive] = useState(false);

  const [form, setForm] = useState({
    name:"",
    number: "",
    password: "",

  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usertype = useSelector(state=>state.Login.usertype)
  console.log(usertype)
  const onChange = (type, value) => {
    setForm({
      ...form,
      [type]: value,
      usertype:usertype,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("signup", form);
    dispatch(registerStaff(form, navigate));
  };
  const setButton = () =>
    form.number === "" || form.password === "" || form.name ===""
      ? "add_button"
      : "add_button add_button__active";

  return (
    <div className="add_content">
      {open === false ? (
        <button className="add_btn" onClick={toggle}>
          Добавить
        </button>
      ) : (
        <div className="add_info">
          <button className="add_revers" onClick={toggle}>
            <p>Добавить</p>
          </button>
          <button>
            <p>Товары</p>
          </button>
          <button>
            <p>Категории</p>
          </button>
          <button onClick={() => setModalActive(true)}>
            <p>Сотрудники</p>
          </button>
        </div>
      )}
      <ModalAdd active={modalActive} setActive={setModalActive}>
        <div className="add_staff">
          <h2>Добавить сотрудника</h2>
          <form className="add_form" onSubmit={onSubmit}>
            <label className="add_label label_margin">Имя/Фамилия</label>
            <input
              className="add_input add_input_login"
              placeholder="Введите имя и фамилию"
              onChange={(e) => onChange("name", e.target.value)}
            />
            <label className="add_label">Номер</label>
            <input
              className="add_input add_input_login"
              placeholder="Введите номер"
              onChange={(e) => onChange("number", e.target.value)}
            />
            <label className="add_label">Пароль</label>

            <input
              className="add_input "
              placeholder="Введите пароль"
              type={eyeOpen === false ? "password" : "text"}
              onChange={(e) => onChange("password", e.target.value)}
            />
            <div className="add_eye">
              {eyeOpen === false ? (
                <div onClick={foggle} className="add_close__eye" />
              ) : (
                <div onClick={foggle} className="add_open__eye" />
              )}
            </div>
            <div className="add_input_pass">
              <AddInfo />
            </div>
            <button className={setButton()} type="submit">ДОБАВИТЬ</button>
          </form>
        </div>
      </ModalAdd>
    </div>
  );
};

export default AddBtn;
