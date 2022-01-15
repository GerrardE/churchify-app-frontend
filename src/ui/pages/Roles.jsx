import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { RoleView } from "../components";

const Role = (props) => {
  return (
    <Dashboard {...props}>
      <RoleView {...props} />
    </Dashboard>
  );
};

export default Role;
