import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createItem } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/attendance/attendance.actions";
import { AppLoader, ButtonGroup } from "../../molecules";
import { Button, ErrorMessage } from "../../atoms";
import MembershipCreate from "./MembershipCreate";
import { isEmpty, fieldSchema } from "../_validations/schema";
import constants from "./reports.constants";
import Table from "../../molecules/Table";

const BranchReportView = ({ match, ...rest }) => {
  const {
    submitparam,
    parameters,
    attendanceparams,
    branchesparams,
    membershipparam,
    branchTableData,
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
    dispatch(createItem(actions, `${parameters}/${attendanceparams}/${branchesparams}`, data));
  };

  const columns = useMemo(() => branchTableData, [branchTableData]);

  const actionItems = {
    canview: false,
    canedit: false,
    candelete: false,
  };

  if (
    isEmpty(match.params) &&
    match.path === `/${parameters}/${submitparam}/${membershipparam}`
  ) {
    return <MembershipCreate props={rest} match={match} />;
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
    data: [{name: branchesparams}],
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
                  <h4 className="c-grey-900 mB-20">SUMMARY OF ATTENDANCE BY BRANCH</h4>
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
                      :<p>Please choose day, month or year ...</p>
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

BranchReportView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

BranchReportView.defaultProps = {
  match: {},
};

export default BranchReportView;
