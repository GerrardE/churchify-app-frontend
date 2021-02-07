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
        className="col-12 col-md-4 peer pX-40 pY-40 h-100 bgc-white scrollable pos-r"
        style={{ minWidth: "320px" }}
      >
        <h3>
          <img className="mr-2" src={Logo} alt="" />
          TREM
        </h3>
        <h4 className="fw-300 c-grey-900">{title}</h4>
        {title === "Signin" ? (
          <p className="mB-40">
            Don&apos;t have an account?
            <a href="/signup"> Signup</a>
          </p>
        ) : (
          <p className="mb-10">
            Already have an account?
            <a href="/"> Signin</a>
          </p>
        )}
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
