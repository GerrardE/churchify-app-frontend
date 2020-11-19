import React from "react";
import PropTypes from "prop-types";

const Inputfield = ({
  fieldType,
  inputType,
  inputClassName,
  inputPlaceholder,
  inputRef,
  inputId,
  inputName,
  readOnly,
  defaultValue,
  inputDisabled,
}) => {
  if (fieldType == "textarea") {
    return (
      <textarea
        type={inputType}
        className={inputClassName}
        placeholder={inputPlaceholder}
        ref={inputRef}
        id={inputId}
        name={inputName}
        readOnly={readOnly}
        defaultValue={defaultValue}
        disabled={inputDisabled}
      />
    );
  }

  return (
    <input
      type={inputType}
      className={inputClassName}
      placeholder={inputPlaceholder}
      ref={inputRef}
      id={inputId}
      name={inputName}
      readOnly={readOnly}
      defaultValue={defaultValue}
      disabled={inputDisabled}
    />
  );
};

Inputfield.propTypes = {
  fieldType: PropTypes.string,
  inputType: PropTypes.string,
  inputClassName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputRef: PropTypes.func.isRequired,
  inputId: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  readOnly: PropTypes.oneOfType([PropTypes.bool]),
  defaultValue: PropTypes.string,
  inputDisabled: PropTypes.oneOfType([PropTypes.bool]),
};

Inputfield.defaultProps = {
  fieldType: "input",
  inputType: "text",
  inputClassName: "form-control",
  inputPlaceholder: "",
  inputId: "",
  readOnly: false,
  defaultValue: "",
  inputDisabled: false,
};

export default Inputfield;
