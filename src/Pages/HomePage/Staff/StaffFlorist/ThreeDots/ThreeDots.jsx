import React, { useState } from "react";
import "./ThreeDots.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { WindowDelete } from "./WindowDelete/WindowDelete";
import { WindowEdit } from "./WindowEdit/WindowEdit";
import { NavLink } from "react-router-dom";
export const ThreeDots = () => {
  // const [open, setOpen] = useState(false)
  // const toggle=()=>{
  //         setOpen(!open)
  // }
  return (
    <NavLink to="/HomePage/StaffRoute/DetailedInfoPage">
      <div className="three_dot"></div>
    </NavLink>
    // <div>
    //     {
    //         (open===false)?
    //         <div className='three_dot' onClick={toggle}><BsThreeDotsVertical /></div>
    //         :
    //         <div className='window'>
    //           <div><WindowDelete/></div>
    //           <div><WindowEdit /></div>

    //         </div>

    //     }
    // </div>
  );
};
