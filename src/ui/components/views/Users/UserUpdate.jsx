import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getItem,
  getItems,
  updateItem,
} from "@infrastructure/services/thunkService";
import * as usersActions from "@domain/redux/users/users.actions";
import * as configsActions from "@domain/redux/configs/configs.actions";
import * as branchActions from "@domain/redux/branches/branches.actions";
import * as zonesActions from "@domain/redux/zones/zones.actions";
import constants from "./users.constants";
import { Button } from "../../atoms";
import { AppLoader } from "../../molecules";
import getFieldsArray from "../_helpers/fieldGenerator";

const UserUpdate = ({ id }) => {
  const {
    branchesparams,
    zonesparams,
    parameter,
    parameters,
    countryparams,
    parametersupdate,
  } = constants;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItems(branchActions, `${branchesparams}`));

    dispatch(getItems(zonesActions, `${zonesparams}`));

    dispatch(getItem(usersActions, `${parameters}/${id}`));

    dispatch(getItem(configsActions, `configs/${parametersupdate}/config`));
  }, [dispatch, parameters, parametersupdate, branchesparams, zonesparams, countryparams, id]);
  
  const { register, handleSubmit, errors } = useForm();
  
  const { users, configs } = useSelector(
    (state) => state,
  );

  const { config: data } = configs;

  const { user: defaults, loading } = users;
  
  data.defaults = defaults;

  const fields = getFieldsArray(
    data,
    errors,
    register,
  );

  const onSubmit = (data) => {
    dispatch(updateItem(usersActions, `${parameters}/${id}`, data));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <h4 className="c-grey-900 mT-10 mB-30">{parameters.toUpperCase()}</h4>
        </div>
        <div className="col-md-6">
          <a
            href={`/settings/${parameters}`}
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

UserUpdate.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default UserUpdate;
