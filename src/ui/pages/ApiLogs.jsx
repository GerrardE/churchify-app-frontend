import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { ApiLogView } from "../components";

const ApiLog = (props) => {
  return (
    <Dashboard {...props}>
      <ApiLogView {...props} />
    </Dashboard>
  );
};

export default ApiLog;
