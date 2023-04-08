import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getItem, getItems, createItem } from "@infrastructure/services/thunkService";
import * as remunerationActions from "@domain/redux/finances/remunerations/remunerations.actions";
import * as configsActions from "@domain/redux/configs/configs.actions";
import * as branchActions from "@domain/redux/branches/branches.actions";
import * as zoneActions from "@domain/redux/zones/zones.actions";
import constants from "./remunerations.constants";
import { Button } from "../../../atoms";
import { AppLoader } from "../../../molecules";
import getFieldsArray from "../../_helpers/fieldGenerator";

const RemunerationCreate = ({ props: { history }}) => {
  const { parameter, parameters, branchesparams, zonesparams } = constants;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItems(zoneActions, `${zonesparams}`));
    dispatch(getItems(branchActions, `${branchesparams}`));
    dispatch(getItem(configsActions, `configs/${parameters}/config`));
  }, [dispatch, parameters, branchesparams, zonesparams]);
  
  const { remunerations, configs, zones, branches } = useSelector((state) => state);
  
  const { loading } = remunerations;
  
  const { config: data } = configs;

  data.branchlist = branches.branches;
  data.zonelist = zones.zones;
  
  const { register, handleSubmit, errors } = useForm();

  const fields = getFieldsArray(data, errors, register);

  const onSubmit = (data) => {
    dispatch(createItem(remunerationActions, `/finance/${parameters}`, data));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 mb-2 mt-2">
          <a
            onClick={() => history.push(`/finances/${parameters}`)}
            className="btn btn-outline-primary float-right"
            role="button"
            aria-pressed="true"
            tabIndex={0}
          >
            BACK
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="bgc-white bd bdrs-3 p-20 mB-20">
            <h4 className="c-grey-900 mB-20">{`CREATE ${parameter.toUpperCase()}`}</h4>
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

RemunerationCreate.propTypes = {
  props: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.oneOfType([PropTypes.func]).isRequired,
    }).isRequired,
  }).isRequired,
};

export default RemunerationCreate;
