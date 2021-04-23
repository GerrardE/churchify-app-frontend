import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getItem, getItems, createItem } from "@infrastructure/services/thunkService";
import * as groupActions from "@domain/redux/groups/groups.actions";
import * as configsActions from "@domain/redux/configs/configs.actions";
import * as branchActions from "@domain/redux/branches/branches.actions";
import * as zonesActions from "@domain/redux/zones/zones.actions";
import constants from "./reports.constants";
import { Button } from "../../atoms";
import { AppLoader } from "../../molecules";
import getFieldsArray from "../_helpers/fieldGenerator";

const GroupCreate = () => {
  const { groupparam, branchesparams, parameters, zonesparams } = constants;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItems(branchActions, `${branchesparams}`));

    dispatch(getItems(zonesActions, `${zonesparams}`));

    dispatch(getItem(configsActions, `configs/${groupparam}/config`));
  }, [dispatch, groupparam, branchesparams, zonesparams]);
  
  const { groups, configs, branches, zones, signin: { user } } = useSelector((state) => state);
  
  const { loading } = groups;
  
  const { config: data } = configs;
  
  data.user = user;
  data.zonesdata = zones.zones;
  
  const { register, handleSubmit, errors } = useForm();

  const fields = getFieldsArray(data, errors, register, [{}], ()=>{}, [{}], ()=>{}, branches.branches);

  const onSubmit = (data) => {
    dispatch(createItem(groupActions, `${parameters}/${groupparam}`, data));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="bgc-white bd bdrs-3 p-20 mB-20">
            <h4 className="c-grey-900 mB-20">{`SUBMIT ${groupparam.toUpperCase()}`}</h4>
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
                        Submit
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

export default GroupCreate;
