import React from "react";
import popup__failPic from "./../images/popup/__failPic/popup__failPic.svg";
import popup__successPic from "./../images/popup/__successPic/popup__successPic.svg";

function InfoTooltip(props) {
  return (
    <section className={`popup popup_${props.name} ${props.isOpen && "popup_visible"}`}>
      <div className="popup__content">
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
        <div className="popup__tooltip">
          <img className="popup__tooltip-pic" src={props.success ? popup__successPic : popup__failPic} />
          <p className="popup__tooltip-title">{props.success ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</p>
        </div>
      </div>
    </section>
  );
}

export default InfoTooltip;