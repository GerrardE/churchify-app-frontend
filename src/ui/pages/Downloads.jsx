import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { DownloadView } from "../components";

const Download = (props) => {
  return (
    <Dashboard>
      <DownloadView {...props} />
    </Dashboard>
  );
};

export default Download;
