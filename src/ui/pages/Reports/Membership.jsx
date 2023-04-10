import React from "react";
import { MembershipCreate, Dashboard } from "../../components";

const Memberships = (props) => {
  return (
    <Dashboard {...props}>
      <MembershipCreate {...props} />
    </Dashboard>
  );
};

export default Memberships;
