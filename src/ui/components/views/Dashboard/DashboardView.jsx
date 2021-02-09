import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/dashboard/dashboard.actions";
import { InfoCard } from "../../molecules";
import constants from "./dashboard.constants";
import AppLoader from "../../molecules/AppLoader";

const DashboardView = () => {
  const dispatch = useDispatch();

  const { parameter } = constants;

  const { dashboard, loading } = useSelector((state) => state.dashboard);

  const {
    weeklabels,
    weeklyattendance,
    weeklymembership,
    dailyattendance,
    dailyactivity,
    dailymembership,
    dailyfellowship,
  } = dashboard;

  React.useEffect(() => {
    dispatch(getItem(actions, `${parameter}/statistics`));
  }, [dispatch, parameter]);

  const data1 = {
    labels: weeklabels,
    datasets: [
      {
        label: "# of members",
        data: weeklymembership,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(116, 163, 196, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(116, 163, 196, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const data = {
    labels: weeklabels,
    datasets: [
      {
        label: "Weekly attendance",
        data: weeklyattendance,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <React.Fragment>
      {loading ? (
        <AppLoader loaderWidth="15%" loaderClassName="app-loader-central" />
      ) : (
        <div className="row gap-20 masonry pos-r">
          <div className="masonry-sizer col-md-6" />
          <div className="masonry-item  w-100">
            <div className="row gap-20">
              <InfoCard
                title="Attendance Reports"
                value={dailyattendance}
                infoCardIcon="c-green-500 ti-user"
              />
              <InfoCard
                title="Membership Reports"
                value={dailymembership}
                infoCardIcon="c-blue-500 ti-face-smile"
              />
              <InfoCard
                title="Fellowship Reports"
                value={dailyfellowship}
                infoCardIcon="c-red-500 ti-stack-overflow"
              />
              <InfoCard
                title="Activity Reports"
                value={dailyactivity}
                infoCardIcon="ti-files"
              />
            </div>
          </div>
          <div className="masonry-item col-lg-6">
            <div className="bgc-white p-20 bd">
              <h6 className="c-grey-900">Attendance (Last 7 days)</h6>
              <div className="mT-30">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
          <div className="masonry-item col-lg-6">
            <div className="bgc-white p-20 bd">
              <h6 className="c-grey-900">Membership (Last 7 days)</h6>
              <div className="mT-30">
                <Doughnut data={data1} />
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default DashboardView;
