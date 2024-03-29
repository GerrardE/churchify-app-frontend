import React, { useMemo, Fragment } from "react";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createItem, getItems } from "@infrastructure/services/thunkService";
import * as gactions from "@domain/redux/reports/attendances/globalattendancereports.actions";
import * as eventActions from "@domain/redux/events/events.actions";
import { AppLoader, ButtonGroup } from "../../molecules";
import { Button, ErrorMessage, Inputfield, Label } from "../../atoms";
import { fieldSchema } from "../_validations/schema";
import constants from "./reports.constants";
import Table from "../../molecules/Table";

const GlobalReportView = () => {
  const {
    attendanceparams,
    globalTableData,
    globalparam,
    eventsparams,
    dropdowndata,
  } = constants;

  const {
    attendances: {
      globalattendancereports: { payload },
    },
    events: { events },
    loading,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItems(eventActions, eventsparams));
  }, [dispatch, eventsparams]);

  const { register, handleSubmit, errors } = useForm();

  const { event, from, to } = errors;

  const onSubmit = (data) => {
    dispatch(
      createItem(
        gactions,
        `${attendanceparams}/${globalparam}`,
        data,
      ),
    );
  };

  const columns = useMemo(() => globalTableData, [globalTableData]);

  const actionItems = {
    canview: false,
    canedit: false,
    candelete: false,
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
                      <i
                        className="ti-printer c-red-500 h3"
                        onClick={() => window.print()}
                      />
                    </span>
                  </div>
                </form>

                <div className="print">
                  <h4 className="c-grey-900 mB-20">GLOBAL SUMMARY</h4>
                  {payload && Object.keys(payload).length>0 ? (
                    <Fragment>
                      <h6>{`Event: ${payload.event.name}`}</h6>
                      <h6>{`Date: ${payload.range}`}</h6>
                      <Table
                        columns={columns}
                        data={payload.attendance}
                        constants={constants}
                        actionItems={actionItems}
                      />
                    </Fragment>
                  ) : (
                    <p>Please filter by event and dates...</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default GlobalReportView;
