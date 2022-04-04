import React, { useState } from "react";
import "./ThreeDots.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSalary } from "../../../../../Store/AsyncAction/getSalary";
import { getOneStaff } from "../../../../../Store/AsyncAction/getOneStaff";
export const ThreeDots = (props) => {
  // const [open, setOpen] = useState(false)
  // const toggle=()=>{
  //         setOpen(!open)
  // }
 
  const dispatch = useDispatch()
  const takeSalary = (id, number) =>{
    localStorage.setItem('id', id)
    localStorage.setItem('number-staff', number)
    const ide = localStorage.getItem('id')
    // console.log(ide)
    dispatch(getSalary(ide))
    dispatch(getOneStaff(localStorage.getItem('number-staff')))
    // console.log(id)
  }
  
  return (
    <NavLink to="/HomePage/StaffRoute/DetailedInfoPage">
      <div className="three_dot" onClick={()=>takeSalary(props.id, props.number)}></div>
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
