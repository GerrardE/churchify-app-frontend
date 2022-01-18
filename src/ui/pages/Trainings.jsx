import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { TrainingView } from "../components";

const Training = (props) => {
  return (
    <Dashboard {...props}>
      <TrainingView {...props} />
    </Dashboard>
  );
};

export default Training;
