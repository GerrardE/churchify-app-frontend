import React from "react";
import { PaymentView, Dashboard } from "../../components";

const Payments = (props) => {
  return (
    <Dashboard {...props}>
      <PaymentView {...props} />
    </Dashboard>
  );
};

export default Payments;
