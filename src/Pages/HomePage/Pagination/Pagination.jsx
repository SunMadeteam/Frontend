import React from "react";
import { useDispatch } from "react-redux";
import "./Pagination.scss";

export const Pagination = (props) => {
  const dispatch = useDispatch();
  const pages = [1, 2, 3, 4, 5];
  const pagination = (next) => {
    dispatch(props.take(next));
  };
  return (
    <div className="pagination">
      <div
        className={
          props.previous === null
            ? "vector_img__prev opacity"
            : "vector_img__prev"
        }
        onClick={() => pagination(props.previous)}
      ></div>
      {pages.map((page, index) => (
        <div key={index} className="pagination_box">
          {page}
        </div>
      ))}
      <div
        className={
          props.next === null
            ? "vector_img__next opacity"
            : "vector_img__next"
        }
        onClick={() => pagination(props.next)}
      ></div>
    </div>
  );
};
