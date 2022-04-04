import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import "./AboutUsContact.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBranch } from "../../../../Store/AsyncAction/getBranch";
import { WindowDelete } from "./WindowDelete/WindowDelete";
export const AboutUsContact = () => {
  const setSecondActive = ({ isActive }) =>
    isActive ? "secondActive_btn__link" : "second_btn__link";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBranch());
  }, []);
  const branch = useSelector((state) => state.Staff.branch);
  console.log(branch);
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="contact">
        <div className="contact_whatsapp">
          <div>
            <div className="whatsapp_img"></div>
            <h3>WhatsApp</h3>
            <div className="pencil_img" onClick={toggle}></div>
          </div>
          <p>+966 000 111 111</p>
        </div>

        <div className="contact_telegram">
          <div>
            <div className="telegram_img"></div>
            <h3>Telegram</h3>
            <div className="pencil_img"></div>
          </div>
          <p>+966 000 111 111</p>
        </div>

        <div className="contact_instagram">
          <div>
            <div className="instagram_img"></div>
            <h3>@SunMade</h3>
            <div className="pencil_img"></div>
          </div>
        </div>

        <div className="contact_phone">
          <div>
            <div className="phone_img"></div>
            <h3>+966 000 111 111</h3>
            <div className="pencil_img"></div>
          </div>
        </div>
      </div>

      <div className="about_us">
        <NavLink
          to="/HomePage/AboutUsRoute/AboutUsContact"
          className={setSecondActive}
        >
          <p>Адреса</p>
        </NavLink>
        {/* <div className='plus'></div> */}
      </div>

      <div className="adress">
        <div>
          {branch.results.map((element) => (
            <div className="adress_branch">
              <div>
                <IoLocationOutline />
                <h3>{element.adress}</h3>
                <div>
                  {open === false ? (
                    <div className="three_dot__img" onClick={toggle}></div>
                  ) : (
                    <div className="window" >
                      <p onClick={toggle}>Редактировать</p>
                      <div><WindowDelete/></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="img_adress"></div>
      </div>
    </div>
  );
};
