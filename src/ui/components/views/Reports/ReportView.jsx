import React from "react";
import PropTypes from "prop-types";
import AttendanceCreate from "./AttendanceCreate";
import { isEmpty } from "../_validations/schema";
import constants from "./reports.constants";

const PreacherView = ({ match, ...rest }) => {
  const { attendanceparam, submitparam, parameters } = constants;

  if (isEmpty(match.params) &&
    match.path === `/${parameters}/${submitparam}/${attendanceparam}`
  ) {
    return <AttendanceCreate props={rest} match={match} />;
  }

  return (
    <React.Fragment />
  );
};

PreacherView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

PreacherView.defaultProps = {
  match: {},
};

export default PreacherView;
