import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttonType, buttonId, buttonClassName, buttonOnClick, children }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={buttonType} id={buttonId} className={buttonClassName} onClick={buttonOnClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  buttonType: PropTypes.string,
  buttonId: PropTypes.string,
  buttonClassName: PropTypes.string,
  buttonOnClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Button.defaultProps = {
  buttonType: "",
  buttonId: "",
  buttonClassName: "",
  buttonOnClick: ()=>{},
  children: "Submit",
};

export default Button;
