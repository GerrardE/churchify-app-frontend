import React from "react";
import { FinanceView, Dashboard } from "../../components";

const Finances = (props) => {
  return (
    <Dashboard {...props}>
      <FinanceView {...props} />
    </Dashboard>
  );
};

export default Finances;
