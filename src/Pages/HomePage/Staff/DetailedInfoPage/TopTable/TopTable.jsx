import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneStaff } from "../../../../../Store/AsyncAction/getOneStaff";
import "./TopTable.scss";

export const TopTable = () => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getOneStaff(localStorage.getItem('number-staff')))
  },[])

  const oneStaff = useSelector(state=>state.Staff.oneStaff.results)
  console.log(oneStaff)
  return (
    <div className="all_line">
       {open === true ? (
          <div className="filter_icon__img2" onClick={toggle}></div>
        ) : (
          <div className="completed_filter">
            <div>
              <p>За день</p>
              <div className="filter_icon__img2" onClick={toggle}></div>
            </div>
            <div>
              <p>За неделю</p>
              <input type="radio" />
            </div>
            <div>
              <p>За текущий месяц</p>
              <input type="radio" />
            </div>
            <div>
              <p>За 3 месяца</p>
              <input type="radio" />
            </div>
            <div>
              <p>За 6 месяцев</p>
              <input type="radio" />
            </div>
          </div>
        )}
      {oneStaff.map((element,index) => (
        <div className="table_line__first nth" key={index}>
          <h3 className="line_first__name">{element.name}</h3>
          <h3 className="line_first__number">{element.number}</h3>
          <h3>{element.is_active===true?"Активен":"Не активен"}</h3>
        </div>
      ))}
      <div className="table_line__second nth">
        <p className="line_second__№">№</p>
        <p className="line_second__day">Рабочий день</p>
        <p className="line_second__salary">Зп за день</p>
        <p>Заказы</p>
      </div>
      <div className="table_line__third nth">
        <h3 className="line_third__total">Всего:</h3>
        <h3 className="line_third__day">21 </h3>
        <h3 className="line_third__salary">16 730 с</h3>
        <h3>135</h3>
      </div>
    </div>
  );
};
