import React from "react";
import { InfoCard } from "../../molecules";

const ReportsView = () => {

  return (
    <React.Fragment>
      <div className="masonry-sizer col-md-6" />
      <div className="masonry-item  w-100">
        <div className="row gap-20">
          <InfoCard title="Submissions Count" value="50,000" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReportsView;
