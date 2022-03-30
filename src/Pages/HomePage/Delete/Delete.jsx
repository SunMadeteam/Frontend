import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Delete.scss";
export const Delete = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  const dispatch = useDispatch()
  const deleteThings = (id) =>{
    dispatch(props.take(id))  
  }
  return (
    <div className="delete">
      {open === false ? (
        <div onClick={toggle} className="delete_icon"></div>
      ) : (
        <div className="delete_cont">
          Вы точно хотите удалить?
          <div className="button_flex">
            <div onClick={()=>deleteThings(props.id)} className="button_yes">Да</div>
            <div onClick={toggle} className="button_no">
              Нет
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
