import React, { useState } from "react";
import "./FloristInfo.scss";
import { ModalAdd } from "../../../AddBtn/ModalAdd/ModalAdd";
import { ThreeDots } from "../ThreeDots/ThreeDots";
import { AiOutlineEye } from "react-icons/ai";
import { RiEyeCloseLine } from "react-icons/ri";
import { AddInfo } from "../../../AddBtn/AddInfo/AddInfo";
import { BranchModal } from "../../StaffAdmin/BranchModal/BranchModal";
import { SalaryModal } from "../../StaffAdmin/SalaryModal/SalaryModal";

export const FloristInfo = () => {
  const [eyeOpen, setEyeOpen] = useState(false);

  const foggle = () => {
    setEyeOpen(!eyeOpen);
  };
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="staff_global">
      <div className="florist_all">
        <div className="florist_info" onClick={() => setModalActive(true)}>
          <div className="info_№">
            <h4>1</h4>
          </div>
          <div className="info_name">
            <h4>Иван Иваныч</h4>
          </div>
          <div className="info_number">
            <h4>+996 709 333 333</h4>
          </div>
          <div className="info_salary">
            <h4>30 000 с</h4>
          </div>
          <div className="info_order">
            <h4>36</h4>
          </div>
        </div>
        <div className="three_dots">
          <ThreeDots />
        </div>
      </div>
      <div className="florist_all">
        <div className="florist_info" onClick={() => setModalActive(true)}>
          <div className="info_№">
            <h4>2</h4>
          </div>
          <div className="info_name">
            <h4>Иван Иваныч</h4>
          </div>
          <div className="info_number">
            <h4>+996 709 333 333</h4>
          </div>
          <div className="info_salary">
            <h4>30 000 с</h4>
          </div>
          <div className="info_order">
            <h4>36</h4>
          </div>
        </div>
        <div className="three_dots">
          <ThreeDots />
        </div>
      </div>

      <div className="florist_all">
        <div className="florist_info" onClick={() => setModalActive(true)}>
          <div className="info_№">
            <h4>3</h4>
          </div>
          <div className="info_name">
            <h4>Иван Иваныч</h4>
          </div>
          <div className="info_number">
            <h4>+996 709 333 333</h4>
          </div>
          <div className="info_salary">
            <h4>30 000 с</h4>
          </div>
          <div className="info_order">
            <h4>36</h4>
          </div>
        </div>
        <div className="three_dots">
          <ThreeDots />
        </div>
      </div>

      <div className="florist_all">
        <div className="florist_info" onClick={() => setModalActive(true)}>
          <div className="info_№">
            <h4>4</h4>
          </div>
          <div className="info_name">
            <h4>Иван Иваныч</h4>
          </div>
          <div className="info_number">
            <h4>+996 709 333 333</h4>
          </div>
          <div className="info_salary">
            <h4>30 000 с</h4>
          </div>
          <div className="info_order">
            <h4>36</h4>
          </div>
        </div>
        <div className="three_dots">
          <ThreeDots />
        </div>
      </div>

      <div className="florist_all">
        <div className="florist_info" onClick={() => setModalActive(true)}>
          <div className="info_№">
            <h4>5</h4>
          </div>
          <div className="info_name">
            <h4>Иван Иваныч</h4>
          </div>
          <div className="info_number">
            <h4>+996 709 333 333</h4>
          </div>
          <div className="info_salary">
            <h4>30 000 с</h4>
          </div>
          <div className="info_order">
            <h4>36</h4>
          </div>
        </div>
        <div className="three_dots">
          <ThreeDots />
        </div>
      </div>

      <div className="florist_all">
        <div className="florist_info" onClick={() => setModalActive(true)}>
          <div className="info_№">
            <h4>6</h4>
          </div>
          <div className="info_name">
            <h4>Иван Иваныч</h4>
          </div>
          <div className="info_number">
            <h4>+996 709 333 333</h4>
          </div>
          <div className="info_salary">
            <h4>30 000 с</h4>
          </div>
          <div className="info_order">
            <h4>36</h4>
          </div>
        </div>
        <div className="three_dots">
          <ThreeDots />
        </div>
      </div>

      <div className="florist_all">
        <div className="florist_info" onClick={() => setModalActive(true)}>
          <div className="info_№">
            <h4>7</h4>
          </div>
          <div className="info_name">
            <h4>Иван Иваныч</h4>
          </div>
          <div className="info_number">
            <h4>+996 709 333 333</h4>
          </div>
          <div className="info_salary">
            <h4>30 000 с</h4>
          </div>
          <div className="info_order">
            <h4>36</h4>
          </div>
        </div>
        <ThreeDots />
      </div>

      <div className="florist_all">
        <div className="florist_info" onClick={() => setModalActive(true)}>
          <div className="info_№">
            <h4>8</h4>
          </div>
          <div className="info_name">
            <h4>Иван Иваныч</h4>
          </div>
          <div className="info_number">
            <h4>+996 709 333 333</h4>
          </div>
          <div className="info_salary">
            <h4>30 000 с</h4>
          </div>
          <div className="info_order">
            <h4>36</h4>
          </div>
        </div>
        <div className="three_dots">
          <ThreeDots />
        </div>
      </div>

      <div className="florist_all">
        <div className="florist_info" onClick={() => setModalActive(true)}>
          <div className="info_№">
            <h4>9</h4>
          </div>
          <div className="info_name">
            <h4>Иван Иваныч</h4>
          </div>
          <div className="info_number">
            <h4>+996 709 333 333</h4>
          </div>
          <div className="info_salary">
            <h4>30 000 с</h4>
          </div>
          <div className="info_order">
            <h4>36</h4>
          </div>
        </div>
        <div className="three_dots">
          <ThreeDots />
        </div>
      </div>

      <ModalAdd active={modalActive} setActive={setModalActive}>
        <div className="staff_modal">
          <h2>Данные сотрудника</h2>
          <form className="modal_form">
            <label className="modal_label label_margin">Имя</label>
            <input
              className="modal_input modal_input_login"
              placeholder="Введите имя и фамилию"
            />
            <label className="modal_label">Номер</label>
            <input
              className="modal_input modal_input_login"
              placeholder="Введите номер"
            />
            <label className="modal_label">Пароль</label>

            <input
              className="modal_input "
              placeholder="Введите пароль"
              type={eyeOpen === false ? "password" : "text"}
            />
            <div className="modal_eye">
              {eyeOpen === false ? (
                <RiEyeCloseLine onClick={foggle} />
              ) : (
                <AiOutlineEye onClick={foggle} />
              )}
            </div>
            <div>
              <AddInfo />
            </div>
            <div className="status">
              <h3>Статус</h3>
              <input type="radio"></input>
            </div>
            <BranchModal />
            <button className="modal_button"> ДОБАВИТЬ </button>
          </form>
        </div>
      </ModalAdd>
    </div>
  );
};
