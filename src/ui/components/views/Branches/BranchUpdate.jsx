import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getItem, getItems, updateItem } from "@infrastructure/services/thunkService";
import * as zonesActions from "@domain/redux/zones/zones.actions";
import * as branchActions from "@domain/redux/branches/branches.actions";
import * as configsActions from "@domain/redux/configs/configs.actions";
import constants from "./branches.constants";
import { Button } from "../../atoms";
import { AppLoader } from "../../molecules";
import getFieldsArray from "../_helpers/fieldGenerator";

const BranchUpdate = ({ id, props: { history } }) => {
  const { parameter, parameters, zoneparams } = constants;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItems(zonesActions, zoneparams));

    dispatch(getItem(configsActions, `configs/${parameters}/config`));
    
    dispatch(getItem(branchActions, `${parameters}/${id}`));
  }, [dispatch, parameters, id, zoneparams]);

  const { register, handleSubmit, errors } = useForm();

  const { branches, configs, zones, countries, states, cities } = useSelector((state) => state);

  const { config: data } = configs;
  
  const { branch: defaults, loading } = branches;
  
  data.defaults = defaults;
  data.zonelist = zones.zones;
  data.countries = countries.countries;

  const fields = getFieldsArray(data, errors, register, states.states_, cities.cities);

  const onSubmit = (data) => {
    dispatch(updateItem(branchActions, `${parameters}/${id}`, data));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <h4 className="c-grey-900 mT-10 mB-30">{parameters.toUpperCase()}</h4>
        </div>
        <div className="col-md-6">
          <a
            onClick={() => history.push(`/settings/${parameters}`)}
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
                <div className="form-group d-flex flex-row-reverse">
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

BranchUpdate.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  props: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.oneOfType([PropTypes.func]).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BranchUpdate;
