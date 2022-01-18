import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { PreacherView } from "../components";

const Preacher = (props) => {
  return (
    <Dashboard {...props}>
      <PreacherView {...props} />
    </Dashboard>
  );
};

export default Preacher;
