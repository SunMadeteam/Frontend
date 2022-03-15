import React, { useState } from "react";
import "./UserBtn.scss";
import { BsPerson } from "react-icons/bs";
import { useSelector } from "react-redux";
const UserBtn = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  const user = useSelector((state) => state.Login.login.number);
  // console.log(user);
  return (
    <div>
      {open === false ? (
        <div className="user_btn" onClick={toggle}><div className="user_persone__img1"></div></div>
      ) : (
        <div className="user_info" >
          <div>
            {user} <div className="user_persone__img" onClick={toggle}></div>
          </div>
          <p>+996 000 123 456</p>
          <p>Выйти</p>
        </div>
      )}
    </div>
  );
};

export default UserBtn;
