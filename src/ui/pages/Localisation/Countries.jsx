import React from "react";
import { CountryView, Dashboard } from "../../components";

const Countries = (props) => {
  return (
    <Dashboard {...props}>
      <CountryView {...props} />
    </Dashboard>
  );
};

export default Countries;
