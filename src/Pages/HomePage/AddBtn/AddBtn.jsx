import React from "react";
import "./AddBtn.scss";
import { useState } from "react";
import { ModalAdd } from "./ModalAdd/ModalAdd";
import { AddInfo, AddStaff } from "./AddStaff/AddStaff";
import { registerStaff } from "../../../Store/AsyncAction/registerStaff";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddBtn = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  const [modalActive, setModalActive] = useState(false);

  
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
        <AddStaff/>
      </ModalAdd> 
    </div>
  );
};

export default AddBtn;
