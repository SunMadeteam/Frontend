import React, { useEffect, useState } from "react";
import "./FloristInfo.scss";
import { ModalAdd } from "../../../AddBtn/ModalAdd/ModalAdd";
import { ThreeDots } from "../ThreeDots/ThreeDots";
import { AiOutlineEye } from "react-icons/ai";
import { RiEyeCloseLine } from "react-icons/ri";
import { AddStaff } from "../../../AddBtn/AddStaff/AddStaff";
import { BranchModal } from "../BranchModal/BranchModal";
import { SalaryModal } from "../../StaffAdmin/SalaryModal/SalaryModal";
import { PositionModal } from "../PositionModal/PositionModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchStaffFlorist } from "../../../../../Store/AsyncAction/fetchStaff";
import { paginationStaff } from "../../../../../Store/AsyncAction/pagination";
import { Pagination } from "../../../Pagination/Pagination";
import { getOneStaff } from "../../../../../Store/AsyncAction/getOneStaff";
import { getBranch } from "../../../../../Store/AsyncAction/getBranch";

export const FloristInfo = () => {
  const [eyeOpen, setEyeOpen] = useState(false);

  const foggle = () => {
    setEyeOpen(!eyeOpen);
  };
  useEffect(() => {
    dispatch(fetchStaffFlorist());
  }, []);

  const dispatch = useDispatch();
  const staff = useSelector((state) => state.Staff.staff);
  // console.log(staff);
  const oneStaff = useSelector((state) => state.Staff.oneStaff.results);
  // console.log(oneStaff)
  const [modalActive, setModalActive] = useState(false);
  const getStaffForModal = (number) => {
    dispatch(getOneStaff(number));
    dispatch(getBranch());
  };
  return (
    <div className="staff_global">
      {staff.results.map((element, index) => (
        <div className="florist_all">
          <div
            className="florist_info"
            key={element.id}
            onClick={() =>
              setModalActive(true, getStaffForModal(element.number))
            }
          >
            <div className="info_№">
              <h4>{index + 1}</h4>
            </div>
            <div className="info_name">
              <h4>{element.name}</h4>
            </div>
            <div className="info_number">
              <h4>{element.number}</h4>
            </div>
            <div className="info_order">
              <h4>36</h4>
            </div>
            <div className="info_salary">
              <h4>{element.salary}</h4>
            </div>
          </div>
          <div className="three_dots">
            <ThreeDots id={element.id} number={element.number}/>
          </div>
        </div>
      ))}
      <Pagination
        next={staff.next}
        previous={staff.previous}
        take={paginationStaff}
      />
      <ModalAdd active={modalActive} setActive={setModalActive}>
        <div className="staff_modal">
          <h2>Данные сотрудника</h2>
          {oneStaff.map((element) => (
            <form className="modal_form" key={element.id}>
              <label className="modal_label label_margin">Имя</label>
              <input
                className="modal_input modal_input_login"
                value={element.name}
              />
              <label className="modal_label">Номер</label>
              <input
                className="modal_input modal_input_login"
                value={element.number}
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
                <PositionModal />
              </div>
              <div className="status">
                <h3>Статус</h3>
                <input
                  type="radio"
                  checked={element.is_active}
                  onChange={false}
                ></input>
              </div>
              <BranchModal />
              <button className="modal_button"> ДОБАВИТЬ </button>
            </form>
          ))}
        </div>
      </ModalAdd>
    </div>
  );
};
