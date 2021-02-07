import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createItem } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/attendance/attendance.actions";
import { AppLoader, ButtonGroup } from "../../molecules";
import { Button, ErrorMessage } from "../../atoms";
import AttendanceCreate from "./AttendanceCreate";
import ActivityCreate from "./ActivityCreate";
import MembershipCreate from "./MembershipCreate";
import TrainingCreate from "./TrainingCreate";
import GroupCreate from "./GroupCreate";
import FreportCreate from "./FreportCreate";
import BranchReportView from "./BranchReportView";
import { isEmpty, fieldSchema } from "../_validations/schema";
import constants from "./reports.constants";
import Table from "../../molecules/Table";

const ReportView = ({ match, ...rest }) => {
  const {
    attendanceparam,
    submitparam,
    parameters,
    activityparam,
    attendanceparams,
    branchesparams,
    membershipparam,
    trainingparam,
    freportparam,
    groupparam,
    tableData,
    days,
    years,
  } = constants;

  const {
    attendances: { payload: data },
    loading,
  } = useSelector((state) => state.attendances);

  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();

  const { day, year } = errors;

  const [ d, setData ] = useState({day: 0, year: 2020});
  const [ dy, setDy ] = useState("Sunday");

  const onSubmit = (data) => {
    setData(data);
    returnDay(data.day, days);
    dispatch(createItem(actions, `${parameters}/${attendanceparams}`, data));
  };

  const columns = useMemo(() => tableData, [tableData]);

  const actionItems = {
    canview: false,
    canedit: false,
    candelete: false,
  };

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

  if (
    isEmpty(match.params) &&
    match.path === `/${parameters}/generate/${branchesparams}`
  ) {
    return <BranchReportView props={rest} match={match} />;
  }

  const returnDay = (i, jj) => {
    const dy = jj.find( j => j.value == i).key;
    setDy(dy);
    return dy;
  };

  const handleDropDown = (items, title) => {
    return (
      <select
        className={classnames("form-control custom-select mr-sm-2", {
          "is-invalid": errors[title],
        })}
        ref={register(fieldSchema({ title }))}
        name={title}
      >
        <option value="" disabled>{title}</option>
        {items &&
          items.map((val) => (
            <option value={val.value} key={val.id}>
              {title === "day" ? val.key : val.value}
            </option>
          ))}
      </select>
    );
  };

  const btnProps = {
    btnGroupClassName: "btn-outline-primary float-right",
    btnTitle: "REPORT TYPE",
    urlFormat: "",
    data: [{name: "zone"}],
  };

  return (
    <React.Fragment>
      <ButtonGroup btnProps={btnProps} />
      {loading ? (
        <AppLoader loaderWidth="15%" loaderClassName="app-loader mt-15" />
      ) : (
        <div className="container-fluid">
          <h4 className="c-grey-900 mT-10 mB-30">
            {constants.attendanceparam.toUpperCase()}
          </h4>
          
          <div className="row my-auto">
            <div className="col-md-12">
              <div className="bgc-white bd bdrs-3 p-20 mB-20">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="needs-validation mt-10"
                  noValidate
                >
                  <div className="row mx-auto">
                    <div className="form-group mr-2">
                      {handleDropDown(days, "day")}

                      <ErrorMessage message={day?.message} />
                    </div>
                    <div className="form-group mr-2">
                      {handleDropDown(years, "year")}
                      <ErrorMessage message={year?.message} />
                    </div>
                    {loading ? (
                      <center>
                        <AppLoader />
                      </center>
                    ) : (
                      <div className="form-group">
                        <Button
                          buttonType="submit"
                          buttonClassName="btn btn-primary"
                        >
                          Save
                        </Button>
                      </div>
                    )}
                    <span className="icon-holder ml-auto">
                      <i className="ti-printer c-red-500 h3" onClick={() => window.print()} />
                    </span>
                  </div>
                </form>
                
                <div className="print">
                  <h4 className="c-grey-900 mB-20">SUMMARY OF ATTENDANCE BY ZONE</h4>
                  <p>{`Day: ${dy}`}</p>
                  <p>{`Year: ${d.year}`}</p>
                  {
                    data
                      ?
                      (
                        <Table
                          columns={columns}
                          data={data}
                          actions={actions}
                          // props={props}
                          constants={constants}
                          actionItems={actionItems}
                        />
                      )
                      :<p>Please choose day and year...</p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
