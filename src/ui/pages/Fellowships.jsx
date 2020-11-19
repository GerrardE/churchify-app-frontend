import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { FellowshipView } from "../components";

const Fellowship = (props) => {
  return (
    <Dashboard>
      <FellowshipView {...props} />
    </Dashboard>
  );
};

export default Fellowship;
