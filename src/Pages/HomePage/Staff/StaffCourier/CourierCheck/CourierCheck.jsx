import React from "react";
import { useDispatch } from "react-redux";
import { fetchStaffCourier } from "../../../../../Store/AsyncAction/fetchStaff";
import { fetchStaffCourierUnActive } from "../../../../../Store/AsyncAction/unActiveStaff";
import "./CourierCheck.scss";
export const CourierCheck = () => {
  const dispatch = useDispatch();
  // console.log(staff);
  const isActiveStaff = () => {
    dispatch(fetchStaffCourier());
  };
  const isUnActiveStaff = () => {
    dispatch(fetchStaffCourierUnActive());
  };
  // const active = ()=> {
  //    is_active == true? "dsadsa":'dsa'
  // }
  return (
    <div className="courier_check">
      <div className="check_№">
        <h3>№</h3>
      </div>
      <div className="check_name">
        <h3>Имя</h3>
      </div>
      <div className="check_number">
        <h3>Номер</h3>
      </div>
      <div className="check_order">
        <h3>Заказ/мес</h3>
      </div>
      <div className="check_salary">
        <h3>Зп/мес.</h3>
      </div>
      <div className="check_goto">
        <h3>Перейти к зп</h3>
      </div>

      <div className="staff_status">
        <div className="staff_active" onClick={() => isActiveStaff()}>
          <p>Активен</p>
        </div>
        <div className="staff_unactive" onClick={() => isUnActiveStaff()}>
          <p>Не активен</p>
        </div>
      </div>
    </div>
  );
};
