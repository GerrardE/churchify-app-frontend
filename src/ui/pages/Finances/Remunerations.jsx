import React from "react";
import { RemunerationView, Dashboard } from "../../components";

const Remunerations = (props) => {
  return (
    <Dashboard {...props}>
      <RemunerationView {...props} />
    </Dashboard>
  );
};

export default Remunerations;
