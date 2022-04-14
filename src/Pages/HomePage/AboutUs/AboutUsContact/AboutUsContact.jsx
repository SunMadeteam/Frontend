import React, { useEffect, useRef, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import "./AboutUsContact.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBranch } from "../../../../Store/AsyncAction/getBranch";
import { WindowDelete } from "./WindowDelete/WindowDelete";
import { Delete } from "../../Delete/Delete";
import { deleteBranch } from "../../../../Store/AsyncAction/deleteBranhc";
import { changeInput } from "../../../../Store/Actions/Action";
import { getBranchById } from "../../../../Store/AsyncAction/getBranchById";
export const AboutUsContact = () => {
  const setSecondActive = ({ isActive }) =>
    isActive ? "secondActive_btn__link" : "second_btn__link";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBranch());
  }, []);
  const branch = useSelector((state) => state.Staff.branch);
  console.log(branch);
  const oneBranch = useSelector(state=>state.Staff.getBranch)
  console.log(oneBranch)
  const [disable, setDisable] = useState(true);
  const toggle = (id) => {
    dispatch(getBranchById(id))
    setDisable(!disable);
  };
  const focusWhatsApp = useRef();
  const focusTelegram = useRef();
  const focusPhone = useRef();
  const focusInstagram = useRef();
  const focusAdress = useRef();

  const [whatsApp, setWhatsApp] = useState("+966 000 111 111");
  const [telegram, setTelegram] = useState("+966 000 111 111");
  const [phone, setPhone] = useState("+966 000 111 111");
  const [instagram, setInstagram] = useState("@SunMade");

  const onFocusWhatsApp = () => {
    setWhatsApp("");
    focusWhatsApp.current.focus();
  };
  const onFocusTelegram = () => {
    setTelegram("");
    focusTelegram.current.focus();
  };
  const onFocusPhone = () => {
    setPhone("");
    focusPhone.current.focus();
  };
  const onFocusInstagram = () => {
    setInstagram("");
    focusInstagram.current.focus();
  };
  // const onFocusAdress = (id) => {
  //   // console.log(id);
  //   if (id === branch.results.id) {
  //     focusAdress.current.focus(id);
  //   }
  // };
  const onChange = (value) => {
    console.log(value)
    dispatch(changeInput(value));
  };

  return (
    <div>
      <div className="contact">
        <div className="contact_whatsapp">
          <div>
            <div className="whatsapp_img"></div>
            <h3>WhatsApp</h3>
            <div className="pencil_img" onClick={onFocusWhatsApp}></div>
          </div>
          <input
            value={whatsApp}
            ref={focusWhatsApp}
            onChange={(e) => setWhatsApp(e.target.value)}
            placeholder="+996 000 111 111"
          ></input>
        </div>

        <div className="contact_telegram">
          <div>
            <div className="telegram_img"></div>
            <h3>Telegram</h3>
            <div className="pencil_img" onClick={onFocusTelegram}></div>
          </div>
          <input
            value={telegram}
            ref={focusTelegram}
            onChange={(e) => setTelegram(e.target.value)}
            placeholder="+996 000 111 111"
          ></input>
        </div>

        <div className="contact_instagram">
          <div>
            <div className="instagram_img"></div>
            <input
              value={instagram}
              ref={focusInstagram}
              onChange={(e) => setInstagram(e.target.value)}
              placeholder="@SunMade"
            ></input>
            <div className="pencil_img" onClick={onFocusInstagram}></div>
          </div>
        </div>

        <div className="contact_phone">
          <div>
            <div className="phone_img"></div>
            <input
              value={phone}
              ref={focusPhone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+996 000 111 111"
            ></input>
            <div className="pencil_img" onClick={onFocusPhone}></div>
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
          {branch.results.map((element, index) => (
            <div className="adress_branch" key={index}>
              <div className="branch_cont">
                <IoLocationOutline />
                <label className="branch_cont">
                  <input
                    value={element.adress}
                    placeholder="Адрес филиала"
                    ref={focusAdress}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={disable}
                  />
                  <Delete id={element.id} take={deleteBranch} />
                  <div
                    className="pencil_img"
                    onClick={() => toggle(element.id)}
                  ></div>
                </label>
                {/* <div>
                  {open === false ? (
                    <div className="three_dot__img" onClick={toggle}></div>
                  ) : (
                    <div className="window">
                      <p onClick={toggle}>Редактировать</p>
                      <div>
                        <WindowDelete />
                      </div>
                    </div>
                  )}
                </div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="img_adress"></div>
      </div>
    </div>
  );
};
