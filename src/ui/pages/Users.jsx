import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { UserView } from "../components";

const User = (props) => {
  return (
    <Dashboard>
      <UserView {...props} />
    </Dashboard>
  );
};

export default User;
