import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  return <div className="invalid-feedback">{message}</div>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: "",
};

export default ErrorMessage;
