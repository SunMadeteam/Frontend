import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./OrderDelete.scss";
export const OrderDelete = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="delete">
      {open === false ? (
        <div onClick={toggle} className="delete_icon" />
      ) : (
        <div className="delete_cont">
          Вы точно хотите удалить?
          <button>Да</button>
          <button onClick={toggle} className="button_no">
            Нет
          </button>
        </div>
      )}
    </div>
  );
};
