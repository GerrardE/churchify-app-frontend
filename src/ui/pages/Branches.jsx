import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { BranchView } from "../components";

const Zone = (props) => {
  return (
    <Dashboard>
      <BranchView {...props} />
    </Dashboard>
  );
};

export default Zone;
