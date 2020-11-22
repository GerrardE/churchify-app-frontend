import React from "react";
import PropTypes from "prop-types";
import AttendanceCreate from "./AttendanceCreate";
import ActivityCreate from "./ActivityCreate";
import MembershipCreate from "./MembershipCreate";
import TrainingCreate from "./TrainingCreate";
import GroupCreate from "./GroupCreate";
import FreportCreate from "./FreportCreate";
import { isEmpty } from "../_validations/schema";
import constants from "./reports.constants";

const ReportView = ({ match, ...rest }) => {
  const { attendanceparam, submitparam, parameters, activityparam, membershipparam, trainingparam, freportparam, groupparam } = constants;

  if (isEmpty(match.params) &&
    match.path === `/${parameters}/${submitparam}/${attendanceparam}`
  ) {
    return <AttendanceCreate props={rest} match={match} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/${parameters}/${submitparam}/${activityparam}`
  ) {
    return <ActivityCreate props={rest} match={match} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/${parameters}/${submitparam}/${membershipparam}`
  ) {
    return <MembershipCreate props={rest} match={match} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/${parameters}/${submitparam}/${trainingparam}`
  ) {
    return <TrainingCreate props={rest} match={match} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/${parameters}/${submitparam}/${groupparam}`
  ) {
    return <GroupCreate props={rest} match={match} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/${parameters}/${submitparam}/${freportparam}`
  ) {
    return <FreportCreate props={rest} match={match} />;
  }

  return (
    <React.Fragment />
  );
};

ReportView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

ReportView.defaultProps = {
  match: {},
};

export default ReportView;
