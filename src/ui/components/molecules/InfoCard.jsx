import React from "react";
import PropTypes from "prop-types";

const InfoCard = ({ title, value }) => {
  return (
    <div className="col-md-3">
      <div className="layers bd bgc-white p-20">
        <div className="layer w-100 mB-10">
          <h6 className="lh-1">{title}</h6>
        </div>
        <div className="layer w-100">
          <div className="peers ai-sb fxw-nw">
            <div className="peer peer-greed">
              <span id="sparklinedash" />
            </div>
            <div className="peer">
              <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">
                {value}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InfoCard;
