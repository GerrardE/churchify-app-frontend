import React from "react";
import { GroupCreate, Dashboard } from "../../components";

const Groups = (props) => {
  return (
    <Dashboard {...props}>
      <GroupCreate {...props} />
    </Dashboard>
  );
};

export default Groups;
