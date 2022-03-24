import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const toggle = () => {
    setOpen(!open);
  };
  const dataUser = localStorage.getItem('user')
  const logOut = () =>{
    localStorage.removeItem('token-sunMade')
    navigate('/Login')
  }
  return (
    <header>
      <div className="header_img">
        <div className="header_link">
          <NavLink to="/HomePage/OrdersRoute/NewOrders">
            <p className="header_link__margin">Заказы</p>
          </NavLink>
          <NavLink to="/HomePage/GoodsRoute/GoodsAll">
            <p>Товары</p>
          </NavLink>
          <NavLink to="/HomePage/StatisticsRoute">
            <p>Статистика</p>
          </NavLink>
          <NavLink to="/HomePage/StaffRoute/StaffCourier">
            <p className="header_link__margin1">Сотрудники</p>
          </NavLink>
          <NavLink to="/HomePage/AboutUsRoute/AboutUsContact">
            <p className="header_link__margin2">О нас</p>
          </NavLink>
          {open === false ? (
            <div className="header_person" onClick={toggle}></div>
          ) : (
            <div className="person_box">
              <h3>
                {dataUser?dataUser:"---------------"} <div className="header_person1" onClick={toggle}></div>
              </h3>
              <p>+996 000 123 456</p>
              <p onClick={logOut}>Выйти</p>
            </div>
          )}
        </div>
        <h2>SunMade</h2>
      </div>
    </header>
  );
};
