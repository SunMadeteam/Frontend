import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Hight.scss";
export const Hight = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const product = useSelector((state) => state.Goods.product);
  return (
    <div className="category_position">
      {open === false ? (
        <div className="category_flex hight_flex">
          <h3>Высота</h3>
          <div onClick={toggle} className="category_vector__img"></div>
        </div>
      ) : (
        <div>
          <div className="category_flex hight_flex">
            <h3>Высота:</h3>
            <div onClick={toggle} className="category_vector__img2"></div>
          </div>
          <div className="category_flex1">
            <p>0.5 м</p>
            <input checked={product.hight === "0.50" ? true : false} type="radio" />
          </div>
          <div className="category_flex1">
            <p>1 м</p>
            <input checked={product.hight === "1.00" ? true : false} type="radio" />
          </div>
          <div className="category_flex1">
            <p>1.5 м</p>
            <input checked={product.hight === "1.50" ? true : false} type="radio" />
          </div>
          <div className="category_flex1">
            <p>2 ма</p>
            <input checked={product.hight === "2.00" ? true : false} type="radio" />
          </div>
          <div className="category_flex1">
            <p>2.5 м</p>
            <input checked={product.hight === "2.50" ? true : false} type="radio" />
          </div>
          <div className="category_flex1">
            <p>3 м</p>
            <input checked={product.hight === "3.00" ? true : false} type="radio" />
          </div>
          <div className="category_flex1">
            <p>3.5 м</p>
            <input checked={product.hight === "3.50" ? true : false} type="radio" />
          </div>
        </div>
      )}
    </div>
  );
};
