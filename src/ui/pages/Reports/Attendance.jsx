import React from "react";
import { AttendanceCreate, Dashboard } from "../../components";

const Attendances = (props) => {
  return (
    <Dashboard {...props}>
      <AttendanceCreate {...props} />
    </Dashboard>
  );
};

export default Attendances;
