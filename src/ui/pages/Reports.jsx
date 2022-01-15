import React from "react";
import { ReportView, Dashboard } from "../components";

const Reports = (props) => {
  return (
    <Dashboard {...props}>
      <ReportView {...props} />
    </Dashboard>
  );
};

export default Reports;
