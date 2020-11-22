import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getItem, getItems, createItem } from "@infrastructure/services/thunkService";
import * as freportActions from "@domain/redux/freports/freports.actions";
import * as configsActions from "@domain/redux/configs/configs.actions";
import * as fellowshipActions from "@domain/redux/fellowships/fellowships.actions";
import constants from "./reports.constants";
import { Button } from "../../atoms";
import { AppLoader } from "../../molecules";
import getFieldsArray from "../_helpers/fieldGenerator";

const FreportCreate = () => {
  const { freportparam, fellowshipsparams, parameters } = constants;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItems(fellowshipActions, `${fellowshipsparams}`));

    dispatch(getItem(configsActions, `configs/${freportparam}/config`));
  }, [dispatch, freportparam, fellowshipsparams]);
  
  const { freports, configs, fellowships } = useSelector((state) => state);
  
  const { loading } = freports;
  
  const { config: data } = configs;
  
  const { register, handleSubmit, errors } = useForm();

  const fields = getFieldsArray(data, errors, register, [{}], ()=>{}, [{}], ()=>{}, [{}], [{}], [{}], [{}], fellowships.fellowships);

  const onSubmit = (data) => {
    dispatch(createItem(freportActions, `${parameters}/${freportparam}`, data));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="bgc-white bd bdrs-3 p-20 mB-20">
            <h4 className="c-grey-900 mB-20">{`SUBMIT ${freportparam.toUpperCase()}`}</h4>
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

export default FreportCreate;
