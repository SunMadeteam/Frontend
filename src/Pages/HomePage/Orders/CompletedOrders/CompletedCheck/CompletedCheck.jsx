import React, { useState } from "react";
import { BsFilterRight } from "react-icons/bs";
import { CompletedFilter } from "../CompletedFilter/CompletedFilter";
import "./CompletedCheck.scss";
export const CompletedCheck = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="order_check">
      <div className="check_№">
        <h3>№</h3>
      </div>
      <div className="check_time">
        <h3>Время</h3>
      </div>
      <div className="check_number">
        <h3>Номер</h3>
      </div>
      <div className="check_name">
        <h3>Имя</h3>
      </div>
      <div className="check_adres">
        <h3>Адрес</h3>
      </div>
      {open === false ? (
        <div className="filter_icon__img" onClick={toggle}></div>
      ) : (
        <div onClick={toggle}>
          <CompletedFilter />
        </div>
      )}
    </div>
  );
};
