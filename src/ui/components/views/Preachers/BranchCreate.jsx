import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getItem, getItems, createItem } from "@infrastructure/services/thunkService";
import * as statesActions from "@domain/redux/states/states.actions";
import * as citiesActions from "@domain/redux/cities/cities.actions";
import * as zonesActions from "@domain/redux/zones/zones.actions";
import * as branchActions from "@domain/redux/branches/branches.actions";
import * as configsActions from "@domain/redux/configs/configs.actions";
import constants from "./branches.constants";
import { Button } from "../../atoms";
import { AppLoader } from "../../molecules";
import getFieldsArray from "../_helpers/fieldGenerator";

const BranchCreate = () => {
  const { parameter, parameters, zoneparams, statesparams, citiesparams } = constants;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItems(zonesActions, zoneparams));
    dispatch(getItem(configsActions, `configs/${parameters}/config`));
  }, [dispatch, parameters, zoneparams]);
  
  const { branches, configs, zones, countries, states, cities } = useSelector((state) => state);
  
  const { loading } = branches;
  
  const { config: data } = configs;
  
  data.zonesdata = zones.zones;

  data.countries = countries.countries;
  
  const { register, handleSubmit, errors } = useForm();

  const getStates = (id) => {
    dispatch(getItems(statesActions, `${statesparams}/${id}/country`));
  };

  const getCities = (id) => {
    dispatch(getItems(citiesActions, `${citiesparams}/${id}/state`));
  };

  const fields = getFieldsArray(data, errors, register, states.states_, getStates, cities.cities, getCities);

  const onSubmit = (data) => {
    dispatch(createItem(branchActions, parameters, data));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 mb-2 mt-2">
          <a
            href={`/dashboard/settings/${parameters}`}
            className="btn btn-outline-primary float-right"
            role="button"
            aria-pressed="true"
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

export default BranchCreate;
