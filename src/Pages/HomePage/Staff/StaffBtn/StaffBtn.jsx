import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./StaffBtn.scss";

export const StaffBtn = () => {
  const setActive = ({ isActive }) =>
    isActive ? "active_btn__link" : "btn_link";
  const setSecondActive = ({ isActive }) =>
    isActive ? "secondActive_btn__link" : "second_btn__link";
  const staff = useSelector((state) => state.Staff.staff.results);
  // console.log(staff);
  const isActiveStaff = () => {
    staff.filter(element => element.is_active===true);
    console.log(staff)
  };
  const isUnActiveStaff = () => {
    staff.filter(element => element.is_active===false);
    console.log(staff)
  };
  return (
    <div className="staff">
      <div className="staff_route">
        <NavLink
          to="/HomePage/StaffRoute/StaffCourier"
          className={setSecondActive}
        >
          <p>Курьер</p>
        </NavLink>
        <NavLink to="/HomePage/StaffRoute/StaffFlorist" className={setActive}>
          <p>Флорист</p>
        </NavLink>
        <NavLink to="/HomePage/StaffRoute/StaffAdmin" className={setActive}>
          <p>Админ</p>
        </NavLink>
      </div>
      <div className="staff_status">
        <div className="staff_active" onClick={()=>isActiveStaff()}>
          <p>Активен</p>
        </div>
        <div className="staff_unactive" onClick={()=>isUnActiveStaff()}>
          <p>Не активен</p>
        </div>
      </div>
    </div>
  );
};
