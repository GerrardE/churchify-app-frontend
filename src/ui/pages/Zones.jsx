import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { ZoneView } from "../components";

const Zone = (props) => {
  return (
    <Dashboard {...props}>
      <ZoneView {...props} />
    </Dashboard>
  );
};

export default Zone;
