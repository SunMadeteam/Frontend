import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStaffAdmin } from "../../../../../Store/AsyncAction/fetchStaff";
import { fetchStaffAdminUnActive } from "../../../../../Store/AsyncAction/unActiveStaff";
import "./AdminCheck.scss";
export const AdminCheck = () => {
  const status = useSelector((state) => state.Staff.staff.results);
  //   console.log(status[0].is_active);
  const dispatch = useDispatch();
  // console.log(staff);
  const [state, setState] = useState(false)

//   const active = () => (isActiveStaff===true ? "staff_active" : "staff_unactive");
//   const unActive = () => (isUnActiveStaff===true ? "staff_unactive" : "staff_unactive");
  const isActiveStaff = () => {
    // setState(!state)
    // (state===true ? "staff_active" : "staff_unactive")
    dispatch(fetchStaffAdmin());
  };
  const isUnActiveStaff = () => {
    // setState(!state)
    // (state===true ? "staff_active" : "staff_unactive")
    dispatch(fetchStaffAdminUnActive());
  };
  return (
    <div className="admin_check">
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
        <div className={state} onClick={() => isActiveStaff()}>
          <p>Активен</p>
        </div>
        <div className={state} onClick={() => isUnActiveStaff()}>
          <p>Не активен</p>
        </div>
      </div>
    </div>
  );
};
