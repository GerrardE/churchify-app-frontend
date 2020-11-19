import React from "react";
import PropTypes from "prop-types";

const Error = ({ err }) => {
  
  return (
    <div className="pos-a t-0 l-0 bgc-white w-100 h-100 d-f fxd-r fxw-w ai-c jc-c pos-r p-30">
      <div className="mR-60">
        <img alt="#" src={err.image} />
      </div>

      <div className="d-f jc-c fxd-c">
        <h1
          className="mB-30 fw-900 lh-1 c-red-500"
          style={{ fontSize: "60px" }}
        >
          {err.code}
        </h1>
        <h3 className="mB-10 fsz-lg c-grey-900 tt-c">{err.info}</h3>
        <p className="mB-30 fsz-def c-grey-700">{err.description}</p>
        <div>
          <a href="/dashboard" type="primary" className="btn btn-primary">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

Error.propTypes = {
  err: PropTypes.shape({
    image: PropTypes.string,
    code: PropTypes.string,
    info: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Error;
