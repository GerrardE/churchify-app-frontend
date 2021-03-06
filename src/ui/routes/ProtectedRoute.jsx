import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ path, component }) => {
  const Component = component;
  
  const { isAuthenticated, user: { role } } = useSelector((state) => state.signin);
  if (!isAuthenticated) return <Redirect to="/" />;

  return (role === "super:admin") ? (
    <Route exact path={path} component={Component} />
  ) : (
    <Route exact path={path} component={Component} />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  path: PropTypes.oneOfType([PropTypes.string]).isRequired,
};

export default ProtectedRoute;
