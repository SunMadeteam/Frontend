import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneStaff } from "../../../../../Store/AsyncAction/getOneStaff";
import { getSalary } from "../../../../../Store/AsyncAction/getSalary";
import "./SalaryTable.scss";
export const SalaryTable = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getSalary(localStorage.getItem('id')))
    // dispatch(getOneStaff(localStorage.getItem('number-staff')))
  },[])
  const salary = useSelector((state) => state.Staff.salary);
  const loading = useSelector(state=>state.Staff.loading)
  console.log(loading)
  console.log(salary);
  return (
    <div className="salary_table">
      {loading===true?salary.deliveries.map((element, index) => (
        <div className="table_line" key={index}>
          <p className="line_№">{index + 1}</p>
          <p className="line_day">{element.date}</p>
          <p className="line_salary">990 с</p>
          <p>{element.delivery_count}</p>
        </div>
      )):<p style={{textAlign:"center", marginTop:"20px", fontSize:"40px"}}>loading...</p>}
      {}
    </div>
  );
};
