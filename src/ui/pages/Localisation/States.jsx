import React from "react";
import { StateView, Dashboard } from "../../components";

const States = (props) => {
  return (
    <Dashboard {...props}>
      <StateView {...props} />
    </Dashboard>
  );
};

export default States;
