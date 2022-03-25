import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErr, usertype } from "../../../../Store/Actions/Action";
import { registerStaff } from "../../../../Store/AsyncAction/registerStaff";
import "./AddStaff.scss";

export const AddStaff = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const [branchOpen, setBranchOpen] = useState(false);

  const roggle = () => {
    setBranchOpen(!branchOpen);
  };


  const [eyeOpen, setEyeOpen] = useState(false);

  const foggle = () => {
    setEyeOpen(!eyeOpen);
  };

  const [form, setForm] = useState({
    name: "",
    number: "",
    password: "",
    usertype: "",
    branch:"",
    is_active: true,
  });
  const dispatch = useDispatch();

  const onChange = (type, value) => {
    dispatch(clearErr())
    setForm({
      ...form,
      [type]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("signup", form);
    dispatch(registerStaff(form));
  };
  const fail = useSelector((state) => state.Failure.err.number);
  // console.log(fail)
  const redInput = () =>
    fail ? "add_input add_input_login red_input" : "add_input add_input_login";
  const setButton = () =>
    form.number === "" || form.password === "" || form.name === ""
      ? "add_button"
      : "add_button add_button__active";

  return (
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
          className={redInput()}
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

        <div className="add_usertype">
          {open === false ? (
            <div className="add_flex">
              <h3 className="add_flex__usertype">Должность</h3>
              <div onClick={toggle} className="add_vector__img"></div>
            </div>
          ) : (
            <div>
              <div className="add_flex">
                <h3 className="add_flex__usertype">Должность</h3>
                <div onClick={toggle} className="add_vector__img2"></div>
              </div>
              <div className="add_flex1">
                <p>Админ</p>
                <input
                  type="radio"
                  name="radio"
                  value="admin"
                  onChange={(e) => onChange("usertype", e.target.value)}
                />
              </div>
              <div className="add_flex1">
                <p>Курьер</p>
                <input
                  type="radio"
                  name="radio"
                  value="runner"
                  onChange={(e) => onChange("usertype", e.target.value)}
                />
              </div>
              <div className="add_flex1">
                <p>Флорист</p>
                <input
                  type="radio"
                  name="radio"
                  value="florist"
                  onChange={(e) => onChange("usertype", e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        <div className="add_branch">
          {branchOpen === false ? (
            <div className="add_flex add_branch__margin">
              <h3 className="add_flex__branch">Филиал</h3>
              <div onClick={roggle} className="add_vector__img"></div>
            </div>
          ) : (
            <div>
              <div className="add_flex add_branch__margin">
                <h3 className="add_flex__branch">Филиал</h3>
                <div onClick={roggle} className="add_vector__img2"></div>
              </div>
              <div className="add_flex1">
                <p>Бишкек, Байтик Батыра 49</p>
                <input
                  type="radio"
                  name="branch"
                  value="1"
                  onChange={(e) => onChange("branch", Number(e.target.value))}
                />
              </div>
              <div className="add_flex1">
                <p>Бишкек, Манаса 47</p>
                <input
                  type="radio"
                  name="branch"
                  value="2"
                  onChange={(e) => onChange("branch", Number(e.target.value))}
                />
              </div>
              <div className="add_flex1">
                <p>Бишкек, проспект Чуй 147/1</p>
                <input
                  type="radio"
                  name="branch"
                  value="3"
                  onChange={(e) => onChange("branch", Number(e.target.value))}
                />
              </div>
            </div>
          )}
        </div>
        <button className={setButton()} type="submit">
          ДОБАВИТЬ
        </button>
      </form>
    </div>
  );
};
