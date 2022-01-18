import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { DashboardView } from "../components";

const Dashbooard = (props) => {
  return (
    <Dashboard {...props}>
      <DashboardView {...props} />
    </Dashboard>
  );
};

export default Dashbooard;
