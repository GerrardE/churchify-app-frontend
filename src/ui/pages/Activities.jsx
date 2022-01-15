import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { ActivityView } from "../components";

const Activities = (props) => {
  return (
    <Dashboard {...props}>
      <ActivityView {...props} />
    </Dashboard>
  );
};

export default Activities;
