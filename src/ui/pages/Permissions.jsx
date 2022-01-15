import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { PermissionView } from "../components";

const Permission = (props) => {
  return (
    <Dashboard {...props}>
      <PermissionView {...props} />
    </Dashboard>
  );
};

export default Permission;
