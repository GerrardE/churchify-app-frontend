import React from "react";
import { ActivityReportsCreate, Dashboard } from "../../components";

const ActivityReports = (props) => {
  return (
    <Dashboard {...props}>
      <ActivityReportsCreate {...props} />
    </Dashboard>
  );
};

export default ActivityReports;
