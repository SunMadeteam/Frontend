import React, { useEffect, useState } from "react";
import "./CourierInfo.scss";
import { ModalAdd } from "../../../AddBtn/ModalAdd/ModalAdd";
import { ThreeDots } from "../../StaffFlorist/ThreeDots/ThreeDots";
import { AiOutlineEye } from "react-icons/ai";
import { RiEyeCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { fetchStaffCourier } from "../../../../../Store/AsyncAction/fetchStaff";
import { PositionModal } from "../../StaffFlorist/PositionModal/PositionModal";
import { Pagination } from "../../../Pagination/Pagination";
import { paginationStaff } from "../../../../../Store/AsyncAction/pagination";
import { getOneStaff } from "../../../../../Store/AsyncAction/getOneStaff";
import { getBranch } from "../../../../../Store/AsyncAction/getBranch";

export const CourierInfo = () => {
  const [eyeOpen, setEyeOpen] = useState(false);

  const foggle = () => {
    setEyeOpen(!eyeOpen);
  };
  const oneStaff = useSelector((state) => state.Staff.oneStaff.results);
  console.log(oneStaff);
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const staff = useSelector((state) => state.Staff.staff);
  // console.log(staff)
  useEffect(() => {
    dispatch(fetchStaffCourier());
  }, []);
  const getStaffForModal = (number) => {
    dispatch(getOneStaff(number));
    dispatch(getBranch())
  };
  // const [name, setName] = useState(oneStaff[0].name)
  const onChange =() =>{

  }
 
  // staff.results.map((element) => console.log(element));
  return (
    <div className="staff_global">
      {staff.results.map((element, index) => (
        <div className="courier_all" key={element.id}>
          <div
            className="courier_info"
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
              <h4>98</h4>
            </div>
            <div className="info_salary">
              <h4>{element.salary}</h4>
            </div>
          </div>
          <ThreeDots />
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
            <form className="modal_form">
              <label className="modal_label label_margin">Имя</label>
              <input
                className="modal_input modal_input_login"
                type="text"
                value={element.name}
                // onChange={(e) => setName(e.target.value)}
              />
              <label className="modal_label">Номер</label>
              <input
                className="modal_input modal_input_login"
                type="text"
                value={element.number}
              />
              <label className="modal_label">Пароль</label>

              <input
                className="modal_input "
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
                <PositionModal/>
              </div>
              <div className="status">
                <h3>Статус</h3>
                <input type="radio" 
                checked={element.is_active}
                ></input>
              </div>
              {/* <BranchModal /> */}
              <button className="modal_button"> ДОБАВИТЬ </button>
            </form>
          ))}
        </div>
      </ModalAdd>
    </div>
  );
};
