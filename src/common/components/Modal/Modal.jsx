import React from "react";
import "./modal.scss";

const Modal = ({ modal, setModal, text, auth }) => {
  return (
    <div
      className={modal ? "modal__wrapper" : "modal__wrapper_none"}
      onClick={() => setModal(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <p>{text}</p>
        <button
              onClick={() => {
                setModal(false);
              }}
            >
              OK
            </button>
      </div>
    </div>
  );
};

export default Modal;