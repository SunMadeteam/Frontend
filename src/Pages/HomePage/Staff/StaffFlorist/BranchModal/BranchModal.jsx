import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getBranch } from "../../../../../Store/AsyncAction/getBranch";
import "./BranchModal.scss";
export const BranchModal = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const branch = useSelector((state) => state.Staff.branch.results);
  const oneStaff = useSelector(state => state.Staff.oneStaff.results)
  console.log(oneStaff)
  // console.log(branch);
//   const check = branch.filter(id=>id.id===oneStaff[0].branch|| id.id===null)
//   console.log(check)
  // const checkedValueFirst = () => {
  //   if (oneStaff[0].branch === "г. Бишкек, проспект чуй 147/1.") {
  //     return true;
  //   } 
  //   else {
  //     return false;
  //   }
  // };
  // const checkedValueSecond = () => {
  //   if (oneStaff[0].branch === "г. Бишкек, Манаса 47.") {
  //     return true;
  //   } 
  //   else {
  //     return false;
  //   }
  // };
  // const checkedValueThird = () => {
  //   if (oneStaff[0].branch === "г. Бишкек, Байтик Батыра 49.") {
  //     return true;
  //   } 
  //   else {
  //     return false;
  //   }
  // };
  return (
    <div className="branch_position">
      {open === false ? (
        <div className="branch_flex">
          <h3>Филиалы</h3>
          <div onClick={toggle} className="branch_vector__img"></div>
        </div>
      ) : (
        <div>
          <div className="branch_flex2">
            <h3>Филиалы</h3>
            <div onClick={toggle} className="branch_vector__img2"></div>
          </div>
          {branch.map((element) => (
            <div className="branch_flex1">
              <p>{element.adress}</p>
              <input type="radio" name="adres" 
            //   checked={checkedValue()}
              />
            </div>
          ))}

          {/* <div className='branch_flex1'>
                    <p>Бишкек, Манаса 47</p>
                    <input type="radio"/>
                </div>
                <div className='branch_flex1 branch_margin'>
                    <p>Бишкек, проспект чуй 147/1</p>
                    <input type="radio"/>
                </div> */}
        </div>
      )}
    </div>
  );
};
