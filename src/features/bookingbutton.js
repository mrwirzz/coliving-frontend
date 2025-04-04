import React from "react";
import PropTypes from "prop-types";

const BookButton = ({ onClick }) => {
  return (
    <button className="btn btn-primary mt-2"
    style={{
        // position: "fixed", // Закрепляем на верхней части экрана
        // top: 0, // Верхний отступ от экрана
        // left: 0, // Левый отступ
        // right: 0, // Правый отступ
        // zIndex: 1000, // 
        borderRadius: "10px", // Закругленные углы
        backgroundColor: "rgb(152, 191, 202)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Тень
        border: "1px solid black", // Добавляем черную обводку
        transition: "transform 0.1s, box-shadow 0.1s",
        ":active": {
          transform: "translateY(2px)",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
        }
      }} onClick={onClick}>
      Book Now
    </button>
  );
};

BookButton.propTypes = {
  onClick: PropTypes.func, // Функция, которую можно передать при необходимости
};

export default BookButton;