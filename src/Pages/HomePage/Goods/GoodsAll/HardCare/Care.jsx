import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Care.scss";

export const Care = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const product = useSelector((state) => state.Goods.product);
  console.log(product);
  const [checked, setChecked] = useState(false);

  const checkedValueEasy = () => {
    if (product.complexity_of_care == "easy") {
      return true;
    } else {
      return false;
    }
  };
  const checkedValueMiddle = () => {
    if (product.complexity_of_care == "middle") {
      return true;
    } else {
      return false;
    }
  };
  const checkedValueHard = () => {
    if (product.complexity_of_care == "hard") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="care_position">
      {open === false ? (
        <div className="care_flex">
          <h3>Сложность ухода</h3>
          <div onClick={toggle} className="care_vector__img"></div>
        </div>
      ) : (
        <div>
          <div className="care_flex">
            <h3>Сложность ухода</h3>
            <div onClick={toggle} className="care_vector__img2"></div>
          </div>
          <div className="care_flex1">
            <p>Лёгкий</p>
            <input
              value="easy"
              checked={checkedValueEasy()}
              // onChange={product.complexity_of_care==="easy"?setChecked(!checked):checked}
              type="radio"
            />
          </div>
          <div className="care_flex1">
            <p>Средний</p>
            <input
              value="middle"
              checked={checkedValueMiddle()}
              // onChange={product.complexity_of_care==="middle"?setChecked(!checked):checked}
              type="radio"
            />
          </div>
          <div className="care_flex1">
            <p>Сложный</p>
            <input
              value="hard"
              checked={checkedValueHard()}
              // onChange={product.complexity_of_care==="hard"?setChecked(!checked):checked}
              type="radio"
            />
          </div>
        </div>
      )}
    </div>
  );
};
