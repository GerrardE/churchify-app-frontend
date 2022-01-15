import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { EventView } from "../components";

const Event = (props) => {
  return (
    <Dashboard {...props}>
      <EventView {...props} />
    </Dashboard>
  );
};

export default Event;
