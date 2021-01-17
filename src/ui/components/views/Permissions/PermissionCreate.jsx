import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getItem, createItem } from "@infrastructure/services/thunkService";
import * as permissionActions from "@domain/redux/permissions/permissions.actions";
import * as configsActions from "@domain/redux/configs/configs.actions";
import constants from "./permissions.constants";
import { Button } from "../../atoms";
import { AppLoader } from "../../molecules";
import getFieldsArray from "../_helpers/fieldGenerator";

const PermissionCreate = () => {
  const { parameter, parameters } = constants;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItem(configsActions, `configs/${parameters}/config`));
  }, [dispatch, parameters]);
  
  const { permissions, configs } = useSelector((state) => state);

  const { loading } = permissions;

  const { config: data } = configs;

  const { register, handleSubmit, errors } = useForm();

  const fields = getFieldsArray(data, errors, register);
  
  const onSubmit = (data) => {
    dispatch(createItem(permissionActions, parameters, data));
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

export default PermissionCreate;
