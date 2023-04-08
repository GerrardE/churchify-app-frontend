import React from "react";
import { ReceiptView, Dashboard } from "../../components";

const Receipts = (props) => {
  return (
    <Dashboard {...props}>
      <ReceiptView {...props} />
    </Dashboard>
  );
};

export default Receipts;
