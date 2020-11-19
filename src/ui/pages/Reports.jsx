import React from "react";
import { ReportsView, Dashboard } from "../components";

const Transactions = (props) => {
  return (
    <Dashboard>
      <ReportsView {...props} />
    </Dashboard>
  );
};

export default Transactions;
