import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { ConfigView } from "../components";

const Config = (props) => {
  return (
    <Dashboard {...props}>
      <ConfigView {...props} />
    </Dashboard>
  );
};

export default Config;
