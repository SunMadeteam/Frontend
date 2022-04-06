import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Category.scss";
export const Category = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  const product = useSelector((state) => state.Goods.product);
  const category = useSelector((state) => state.Goods.category);
  // console.log(category);
  return (
    <div className="category_position">
      {open === false ? (
        <div className="category_flex">
          <h3>Категории</h3>
          <div onClick={toggle} className="category_vector__img"></div>
        </div>
      ) : (
        <div>
          <div className="category_flex">
            <h3>Категории</h3>
            <div onClick={toggle} className="category_vector__img2"></div>
          </div>
          {category.results.map((element, index) => (
            <div className="category_flex1" key={index}>
              <p>{element.name}</p>
              <input
                checked={element.id === product.category.id ? true : false}
                type="radio"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
