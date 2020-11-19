import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const ButtonGroup = ({ btnProps }) => {
  const { btnGroupClassName, btnTitle, urlFormat, data } = btnProps;

  return (
    <div className={`btn-group ${btnGroupClassName}`} role="group">
      <button
        id="btnGroupDrop"
        type="button"
        className="btn btn-outline-primary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {btnTitle}
      </button>
      <div className="dropdown-menu" aria-labelledby="btnGroupDrop">
        {data.map((d) => (
          <a
            className="dropdown-item"
            key={uuidv4()}
            href={`${urlFormat}${d.name.toLowerCase()}`}
          >
            {d.name.toUpperCase()}
          </a>
        ))}
      </div>
    </div>
  );
};

ButtonGroup.propTypes = {
  btnProps: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default ButtonGroup;
