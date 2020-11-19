import React from "react";
import PropTypes from "prop-types";
import Loader from "@ui/assets/static/images/loader.gif";

const AppLoader = ({ loaderClassName, loaderWidth }) => {
  return (
    <center>
      <img src={Loader} alt="loader" width={loaderWidth} className={loaderClassName} />
    </center>
  );
};

AppLoader.propTypes = {
  loaderClassName: PropTypes.string,
  loaderWidth: PropTypes.string,
};

AppLoader.defaultProps = {
  loaderClassName: "",
  loaderWidth: "50%",
};

export default AppLoader;
