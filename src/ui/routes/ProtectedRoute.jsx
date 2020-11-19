import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ path, component }) => {
  const Component = component;
  const isAuthenticated = useSelector((state) => state.signin.isAuthenticated);

  return isAuthenticated ? (
    <Route exact path={path} component={Component} />
  ) : (
    <Redirect to="/" />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  path: PropTypes.oneOfType([PropTypes.string]).isRequired,
};

export default ProtectedRoute;
