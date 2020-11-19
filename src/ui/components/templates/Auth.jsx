import React from "react";
import PropTypes from "prop-types";
import Logo from "@ui/assets/static/images/logo.png";
import BackgroundImage from "@ui/assets/static/images/bg.jpg";

const Auth = ({ children, title }) => {
  return (
    <div className="peers ai-s fxw-nw h-100vh">
      <div
        className="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="pos-a centerXY">
          <div
            className="bgc-white bdrs-50p pos-r"
            style={{ width: "120px", height: "120px" }}
          >
            <img className="pos-a centerXY" src={Logo} alt="" />
          </div>
        </div>
      </div>
      <div
        className="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r"
        style={{ minWidth: "320px" }}
      >
        <h1>
          <img className="mr-2" src={Logo} alt="" />
          TREM
        </h1>
        <h3>Reports Admin Panel</h3>
        <br />
        <h4 className="fw-300 c-grey-900 mB-40">{title}</h4>
        {children}
      </div>
    </div>
  );
};

Auth.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
};

export default Auth;
