import React from "react";
import { TrainingReportsCreate, Dashboard } from "../../components";

const TrainingReports = (props) => {
  return (
    <Dashboard {...props}>
      <TrainingReportsCreate {...props} />
    </Dashboard>
  );
};

export default TrainingReports;
