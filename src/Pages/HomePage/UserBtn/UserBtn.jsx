import React, { useState } from "react";
import "./UserBtn.scss";
import { useNavigate } from "react-router-dom";
const UserBtn = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token-sunMade");
    navigate("/Login");
  };
  const user = localStorage.getItem('user')
  // console.log(user);
  return (
    <div>
      {open === false ? (
        <div className="user_btn" onClick={toggle}>
          <div className="user_persone__img1"></div>
        </div>
      ) : (
        <div className="user_info">
          <div>
            {user?user:"----------"} <div className="user_persone__img" onClick={toggle}></div>
          </div>
          <p>+996 000 123 456</p>
          <p onClick={logOut} style={{cursor:"pointer", marginBottom:'0px', marginTop:'33px'}}>Выйти</p>
        </div>
      )}
    </div>
  );
};

export default UserBtn;
