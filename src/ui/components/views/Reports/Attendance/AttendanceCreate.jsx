import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getItem, getItems, createItem } from "@infrastructure/services/thunkService";
import * as attendancesActions from "@domain/redux/reports/attendances/attendances.actions";
import * as configsActions from "@domain/redux/configs/configs.actions";
import * as branchActions from "@domain/redux/branches/branches.actions";
import * as preacherActions from "@domain/redux/preachers/preachers.actions";
import * as zonesActions from "@domain/redux/zones/zones.actions";
import * as eventActions from "@domain/redux/events/events.actions";
import constants from "./attendance.constants";
import { Button } from "../../../atoms";
import { AppLoader } from "../../../molecules";
import getFieldsArray from "../../_helpers/fieldGenerator";
import AttendanceUpdate from "./AttendanceUpdate";
import AttendanceView from "./AttendanceView";
import { isEmpty } from "../../_validations/schema";

const AttendanceCreate = ({ match, ...rest }) => {
  const { parameter, parameters, branchesparams, zonesparams, eventsparams, preachersparams } = constants;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItems(zonesActions, `${zonesparams}`));
    dispatch(getItems(branchActions, `${branchesparams}`));
    dispatch(getItems(eventActions, `${eventsparams}`));
    dispatch(getItems(preacherActions, `${preachersparams}`));
    dispatch(getItem(configsActions, `configs/${parameters}/config`));
  }, [dispatch, parameters, branchesparams, zonesparams, eventsparams, preachersparams]);
  
  const { attendances, configs, events, preachers, zones, signin: { user }, branches } = useSelector((state) => state);
  
  const { loading } = attendances;
  
  const { config: data } = configs;

  data.user = user;
  data.zonelist = zones.zones;
  data.branchlist = branches.branches;
  data.eventlist = events.events;
  data.preacherlist = preachers.preachers;
  
  const { register, handleSubmit, errors } = useForm();

  if (!isEmpty(match.params) && match.path === `/reports/${parameters}/:id`) {
    const { params } = match;
    const { id } = params;

    return <AttendanceUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/reports/${parameters}`
  ) {
    return <AttendanceView match={match} props={rest} />;
  }

  const fields = getFieldsArray(data, errors, register);

  const onSubmit = (data) => {
    dispatch(createItem(attendancesActions, parameters, data));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 mb-2 mt-2">
          <a
            onClick={() => rest.history.push(`/reports/${parameters}`)}
            className="btn btn-outline-primary float-right"
            role="button"
            aria-pressed="true"
            tabIndex={0}
          >
            VIEW ATTENDANCE
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="bgc-white bd bdrs-3 p-20 mB-20">
            <h4 className="c-grey-900 mB-20">{`SUBMIT ${parameter.toUpperCase()}`}</h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="needs-validation"
              noValidate
            >
              <div className="form-row">
                {fields}
              </div>

              {loading ? (
                <center>
                  <AppLoader loaderWidth="15%" loaderClassName="app-loader" />
                </center>
              ) : (
                <div className="form-attendance d-flex flex-row-reverse mt-2">
                  <div className="peers ai-c jc-sb fxw-nw">
                    <div className="peer">
                      <Button
                        buttonType="submit"
                        buttonClassName="btn btn-primary mr-2"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="col-md-2" />
      </div>
    </div>
  );
};

AttendanceCreate.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
  history: PropTypes.shape({
    push: PropTypes.oneOfType([PropTypes.func]).isRequired,
  }).isRequired,
};

AttendanceCreate.defaultProps = {
  match: {},
};

export default AttendanceCreate;
