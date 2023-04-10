import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getItem, getItems, updateItem } from "@infrastructure/services/thunkService";
import * as branchActions from "@domain/redux/branches/branches.actions";
import * as freportsActions from "@domain/redux/reports/freports/freports.actions";
import * as configsActions from "@domain/redux/configs/configs.actions";
import constants from "./freport.constants";
import { Button } from "../../../atoms";
import { AppLoader } from "../../../molecules";
import getFieldsArray from "../../_helpers/fieldGenerator";

const FreportUpdate = ({ id, props: { history } }) => {
  const { parameter, parameters, branchesparams } = constants;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItem(configsActions, `configs/${parameters}/config`));
    
    dispatch(getItems(branchActions, branchesparams));

    dispatch(getItem(freportsActions, `freports/${id}`));
  }, [dispatch, parameters, id, branchesparams]);

  const { register, handleSubmit, errors } = useForm();

  const { branches, freports, configs, countries, states, cities } = useSelector((state) => state);

  const { config: data } = configs;

  const { freport: defaults, loading } = freports;
  
  data.defaults = defaults;
  data.branchlist = branches.branches;
  data.countries = countries.countries;

  const fields = getFieldsArray(data, errors, register, states.states_, cities.cities);

  const onSubmit = (data) => {
    dispatch(updateItem(freportsActions, `freports/${id}`, data));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <h4 className="c-grey-900 mT-10 mB-30">{parameters.toUpperCase()}</h4>
        </div>
        <div className="col-md-6">
          <a
            onClick={() => history.push(`/reports/${parameters}`)}
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
            <h4 className="c-grey-900 mB-20">{`UPDATE ${parameter.toUpperCase()}`}</h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="needs-validation"
              noValidate
            >
              <div className="form-row">{fields}</div>

              {loading ? (
                <AppLoader loaderWidth="15%" loaderClassName="app-loader" />
              ) : (
                <div className="form-freport d-flex flex-row-reverse">
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

FreportUpdate.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  props: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.oneOfType([PropTypes.func]).isRequired,
    }).isRequired,
  }).isRequired,
};

export default FreportUpdate;