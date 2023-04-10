import React from "react";
import { AssetView, Dashboard } from "../../components";

const Assets = (props) => {
  return (
    <Dashboard {...props}>
      <AssetView {...props} />
    </Dashboard>
  );
};

export default Assets;
