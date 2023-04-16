import React, { useMemo, Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createItem,
  getItems } from "@infrastructure/services/thunkService";
import * as attendanceActions from "@domain/redux/reports/attendances/attendances.actions";
import * as eventActions from "@domain/redux/events/events.actions";
import * as zoneActions from "@domain/redux/zones/zones.actions";
import { AppLoader, ButtonGroup } from "../../molecules";
import { Button, ErrorMessage, Inputfield, Label } from "../../atoms";
import BranchReportView from "./BranchReportView";
import GlobalReportView from "./GlobalReportView";
import { isEmpty, fieldSchema } from "../_validations/schema";
import constants from "./reports.constants";
import Table from "../../molecules/Table";

const ReportView = ({ match, ...rest }) => {
  const {
    parameters,
    attendanceparams,
    branchesparams,
    tableData,
    zonesparams,
    eventsparams,
    globalparam,
    dropdowndata,
  } = constants;

  const {
    attendances: { attendances: { payload }},
    zones: { zones },
    events: { events },
    loading,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItems(eventActions, eventsparams));
    dispatch(getItems(zoneActions, zonesparams));
  }, [dispatch, eventsparams, zonesparams]);

  const { register, handleSubmit, errors } = useForm();

  const { event, zone, from, to } = errors;

  const onSubmit = (data) => {
    dispatch(createItem(attendanceActions, `${attendanceparams}/${zonesparams}`, data));
  };

  const columns = useMemo(() => tableData, [tableData]);

  const actionItems = {
    canview: false,
    canedit: false,
    candelete: false,
  };

  if (
    isEmpty(match.params) &&
    match.path === `/${parameters}/generate/${branchesparams}`
  ) {
    return <BranchReportView props={rest} match={match} />;
  }

  if (
    isEmpty(match.params) &&
    match.path === `/${parameters}/generate/${globalparam}`
  ) {
    return <GlobalReportView props={rest} match={match} />;
  }

  const handleDropDown = (items, title) => {
    return (
      <select
        className={classnames("form-control custom-select mr-sm-2", {
          "is-invalid": errors[title],
        })}
        ref={register(fieldSchema({ title }))}
        name={title}
      >
        {items &&
          items.map((val) => (
            <option value={val.id} key={val.id}>
              {val.name}
            </option>
          ))}
      </select>
    );
  };

  const btnProps = {
    btnGroupClassName: "btn-outline-primary float-right",
    btnTitle: "REPORT TYPE",
    urlFormat: "",
    data: dropdowndata,
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
                      <Label labelClassName="text-normal text-dark">
                        Event:
                      </Label>

                      {handleDropDown(events, "eventid")}

                      <ErrorMessage message={event?.message} />
                    </div>
                    <div className="form-group mr-2">
                      <Label labelClassName="text-normal text-dark">
                        Zone:
                      </Label>
                      {handleDropDown(zones, "zoneid")}
                      <ErrorMessage message={zone?.message} />
                    </div>
                    <div className="form-group mr-2">
                      <Label labelClassName="text-normal text-dark">
                        From:
                      </Label>
                      <Inputfield
                        inputType="date"
                        inputClassName={classnames("form-control", {
                          "is-invalid": from,
                        })}
                        inputName="from"
                        inputRef={register()}
                      />
                      <ErrorMessage message={from?.message} />
                    </div>
                    <div className="form-group mr-2">
                      <Label labelClassName="text-normal text-dark">To:</Label>
                      <Inputfield
                        inputType="date"
                        inputClassName={classnames("form-control", {
                          "is-invalid": to,
                        })}
                        inputName="to"
                        inputRef={register()}
                      />
                      <ErrorMessage message={to?.message} />
                    </div>
                    {loading ? (
                      <center>
                        <AppLoader />
                      </center>
                    ) : (
                      <div className="form-group">
                        <br />
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
                  <h4 className="c-grey-900 mB-20">ZONE SUMMARY</h4>
                  {
                    payload && Object.keys(payload).length>0
                      ?
                      (
                        <Fragment>
                          <h6>{`Name: ${payload.zone.name}`}</h6>
                          <h6>{`Event: ${payload.event.name}`}</h6>
                          <h6>{`Date: ${payload.range}`}</h6>
                          <Table
                            columns={columns}
                            data={payload.attendance}
                            // actions={actions}
                            // props={props}
                            constants={constants}
                            actionItems={actionItems}
                          />
                        </Fragment>
                      )
                      :<p>Please filter by event, zone and year...</p>
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
