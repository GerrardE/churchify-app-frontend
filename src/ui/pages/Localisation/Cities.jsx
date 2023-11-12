import React from "react";
import { CityView, Dashboard } from "../../components";

const Cities = (props) => {
  return (
    <Dashboard {...props}>
      <CityView {...props} />
    </Dashboard>
  );
};

export default Cities;
