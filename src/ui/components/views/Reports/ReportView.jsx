import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { createItem } from "@infrastructure/services/thunkService";
import * as attendanceActions from "@domain/redux/attendance/attendance.actions";
import AttendanceCreate from "./AttendanceCreate";
import ActivityCreate from "./ActivityCreate";
import MembershipCreate from "./MembershipCreate";
import TrainingCreate from "./TrainingCreate";
import GroupCreate from "./GroupCreate";
import FreportCreate from "./FreportCreate";
import { isEmpty } from "../_validations/schema";
import constants from "./reports.constants";

const ReportView = ({ match, ...rest }) => {
  const {
    attendanceparam,
    submitparam,
    parameters,
    activityparam,
    membershipparam,
    trainingparam,
    freportparam,
    groupparam,
  } = constants;

  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const retrieveAttendance = (data) => {
    dispatch(createItem(attendanceActions, `${parameters}/synodattendance`, data));
  };

  const { attendances } = useSelector((state) => state);

  // eslint-disable-next-line no-unused-vars
  const { attendance: { fulfillmentValue } } = attendances;

  if (
    isEmpty(match.params) &&
    match.path === `/${parameters}/${submitparam}/${attendanceparam}`
  ) {
    return <AttendanceCreate props={rest} match={match} />;
  }

  if (
    isEmpty(match.params) &&
    match.path === `/${parameters}/${submitparam}/${activityparam}`
  ) {
    return <ActivityCreate props={rest} match={match} />;
  }

  if (
    isEmpty(match.params) &&
    match.path === `/${parameters}/${submitparam}/${membershipparam}`
  ) {
    return <MembershipCreate props={rest} match={match} />;
  }

  if (
    isEmpty(match.params) &&
    match.path === `/${parameters}/${submitparam}/${trainingparam}`
  ) {
    return <TrainingCreate props={rest} match={match} />;
  }

  if (
    isEmpty(match.params) &&
    match.path === `/${parameters}/${submitparam}/${groupparam}`
  ) {
    return <GroupCreate props={rest} match={match} />;
  }

  if (
    isEmpty(match.params) &&
    match.path === `/${parameters}/${submitparam}/${freportparam}`
  ) {
    return <FreportCreate props={rest} match={match} />;
  }

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <div className="bgc-white bd bdrs-3 p-20 mB-20">
              <h4 className="c-grey-900 mB-20">
                GRAND SUMMARY OF REGULAR ATTENDANCE 2018 - 2019
              </h4>
              <table
                id="tablePreview"
                className="table table-hover table-striped table-bordered"
              >
                <thead>
                  <tr>
                    <th />
                    <th colSpan="3">Tuesdays</th>
                    <th />
                    <th colSpan="3">Sundays</th>
                  </tr>
                  <tr>
                    <th />
                    <th>2018</th>
                    <th>2019</th>
                    <th>2020</th>
                    <th />
                    <th>2018</th>
                    <th>2019</th>
                    <th>2020</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>HQ</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <th />
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>HQ Annex</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <th />
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Ejigbo</td>
                    <td>the Bird</td>
                    <td>the Bird</td>
                    <th />
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>Mark</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    </React.Fragment>
  );
};

ReportView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

ReportView.defaultProps = {
  match: {},
};

export default ReportView;
