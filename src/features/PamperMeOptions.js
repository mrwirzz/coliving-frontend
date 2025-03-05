import React, { useState } from "react";
import PropTypes from "prop-types";

const PamperMeOptions = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-center my-3">
      <button
        className="btn btn-outline-primary"style={{
            borderRadius: "10px",
            backgroundColor: "rgb(152, 191, 202)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",}}
        onClick={() => setIsOpen(!isOpen)}
      >
        Pamper Me Add-ons (Coming Soon)
      </button>

      {isOpen && (
        <div className="mt-2" >
          {options.map((option, index) => (
            <button
              key={index}
              className="btn btn-light d-block w-100 my-1"
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
