import React from "react";
import PropTypes from "prop-types";

const Label = ({ labelHtmlFor, labelClassName, children }) => {
  return (
    <label htmlFor={labelHtmlFor} className={labelClassName}>
      {children}
    </label>
  );
};

Label.propTypes = {
  labelHtmlFor: PropTypes.string,
  labelClassName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Label.defaultProps = {
  labelHtmlFor: "",
  labelClassName: "",
};

export default Label;
