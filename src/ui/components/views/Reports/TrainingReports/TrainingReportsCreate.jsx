import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getItem, getItems, createItem } from "@infrastructure/services/thunkService";
import * as trainingreportsActions from "@domain/redux/reports/trainingreports/trainingreports.actions";
import * as configsActions from "@domain/redux/configs/configs.actions";
import * as branchActions from "@domain/redux/branches/branches.actions";
import * as zonesActions from "@domain/redux/zones/zones.actions";
import * as trainingActions from "@domain/redux/trainings/trainings.actions";
import constants from "./trainingreports.constants";
import { Button } from "../../../atoms";
import { AppLoader } from "../../../molecules";
import getFieldsArray from "../../_helpers/fieldGenerator";
import TrainingReportsUpdate from "./TrainingReportsUpdate";
import TrainingReportsView from "./TrainingReportsView";
import { isEmpty } from "../../_validations/schema";

const TrainingReportsCreate = ({ match, ...rest }) => {
  const { parameter, parameters, branchesparams, zonesparams, trainingtypeparams } = constants;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItems(zonesActions, `${zonesparams}`));
    dispatch(getItems(branchActions, `${branchesparams}`));
    dispatch(getItem(configsActions, `configs/${parameters}/config`));
    dispatch(getItems(trainingActions, `${trainingtypeparams}`));
  }, [dispatch, parameters, branchesparams, zonesparams, trainingtypeparams]);
  
  const { trainingreports, configs, zones, branches, trainings } = useSelector((state) => state);
  
  const { loading } = trainingreports;
  
  const { config: data } = configs;

  data.zonelist = zones.zones;
  data.branchlist = branches.branches;
  data.trainingtypelist = trainings.trainings;
  
  const { register, handleSubmit, errors, reset } = useForm();

  if (!isEmpty(match.params) && match.path === `/reports/${parameters}/:id`) {
    const { params } = match;
    const { id } = params;

    return <TrainingReportsUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/reports/${parameters}`
  ) {
    return <TrainingReportsView match={match} props={rest} />;
  }

  const fields = getFieldsArray(data, errors, register);

  const onSubmit = (data) => {
    dispatch(createItem(trainingreportsActions, parameters, data));
    reset();
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
            {`VIEW ${parameters.toUpperCase()}`}
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
                <div className="form-group d-flex flex-row-reverse mt-2">
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

TrainingReportsCreate.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
  history: PropTypes.shape({
    push: PropTypes.oneOfType([PropTypes.func]).isRequired,
  }).isRequired,
};

TrainingReportsCreate.defaultProps = {
  match: {},
};

export default TrainingReportsCreate;
