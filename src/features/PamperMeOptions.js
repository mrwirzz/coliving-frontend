import React, { useState } from "react";
import PropTypes from "prop-types";

const PamperMeOptions = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonStyle = {
    borderRadius: "10px",
    backgroundColor: "transparent",
    color: "black",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    border: "2px solid black",
    transition: "transform 0.1s, box-shadow 0.1s"
  };

  const activeButtonStyle = {
    ...buttonStyle,
    ":active": {
      transform: "translateY(2px)",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
    }
  };

  return (
    <div className="text-center my-3">
      <button
        className="btn"
        style={activeButtonStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        Pamper Me Add-ons (Coming Soon)
      </button>

      {isOpen && (
        <div className="mt-2">
          {options.map((option, index) => (
            <button
              key={index}
              className="btn d-block w-100 my-1"
              style={activeButtonStyle}
              onClick={() => alert(`Selected: ${option.text}`)}
            >
              <img
                src={option.icon}
                alt={option.text}
                className="me-2"
                style={{ width: "20px" }}
              />
              {option.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

PamperMeOptions.propTypes = {
  options: PropTypes.array.isRequired,
};

export default PamperMeOptions;
