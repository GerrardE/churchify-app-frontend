import React from "react";
import { FreportCreate, Dashboard } from "../../components";

const Freports = (props) => {
  return (
    <Dashboard {...props}>
      <FreportCreate {...props} />
    </Dashboard>
  );
};

export default Freports;
