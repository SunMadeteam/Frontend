import React, { useEffect, useState } from "react";
import "./GoodsFilter.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../../../Store/AsyncAction/getCategory";
export const GoodsFilter = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  const category = useSelector((state) => state.Goods.category);
  console.log(category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);
  const onChange = (value) => {
    console.log(value);
  };
  return (
    <div>
      {open === false ? (
        <div className="goods_filter__icon" onClick={toggle}></div>
      ) : (
        <div className="goods_filter">
          <div>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>Категории</p>{" "}
            <div className="goods_icon" onClick={toggle}></div>
          </div>
          {category.results.map((element) => (
            <div key={element.id}>
              <p>{element.name}</p>{" "}
              <input
                type="radio"
                name="category"
                value={element.id}
                onChange={(e) => onChange(e.target.value)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
