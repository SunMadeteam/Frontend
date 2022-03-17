import React, { useState } from "react";
import "./TopTable.scss";

export const TopTable = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="all_line">
      <div className="table_line__first nth">
        <h3 className="line_first__name">Леонид Якубович</h3>
        <h3 className="line_first__number">+996 000 111 111</h3>
        <h3>Активен</h3>
        {/* {open === true ? (
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
        )} */}
      </div>
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
