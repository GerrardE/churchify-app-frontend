import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { DashboardView } from "../components";

const Dashbooard = (props) => {
  return (
    <Dashboard>
      <DashboardView {...props} />
    </Dashboard>
  );
};

export default Dashbooard;
