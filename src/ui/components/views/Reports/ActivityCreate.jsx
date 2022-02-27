import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getItem, getItems, createItem } from "@infrastructure/services/thunkService";
import * as activityActions from "@domain/redux/activities/activities.actions";
import * as configsActions from "@domain/redux/configs/configs.actions";
import * as zonesActions from "@domain/redux/zones/zones.actions";
import constants from "./reports.constants";
import { Button } from "../../atoms";
import { AppLoader } from "../../molecules";
import getFieldsArray from "../_helpers/fieldGenerator";

const ActivityCreate = () => {
  const { activityparam, zonesparams, parameters, activitytypeparams } = constants;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItems(zonesActions, `${zonesparams}`));
    dispatch(getItems(activityActions, `${activitytypeparams}`));

    dispatch(getItem(configsActions, `configs/${activityparam}/config`));
  }, [dispatch, activityparam, zonesparams, activitytypeparams]);
  
  const { activities, configs, branches, zones, signin: { user } } = useSelector((state) => state);
  
  const { loading } = activities;
  
  const { config: data } = configs;

  data.user = user;
  data.zonelist = zones.zones;
  data.branchlist = branches.branches;
  data.activitytypelist = activities.activities;
  
  const { register, handleSubmit, errors } = useForm();
  
  const fields = getFieldsArray(data, errors, register);

  const onSubmit = (data) => {
    dispatch(createItem(activityActions, `${parameters}/${activityparam}`, data, true));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="bgc-white bd bdrs-3 p-20 mB-20">
            <h4 className="c-grey-900 mB-20">{`SUBMIT ${activityparam.toUpperCase()} REPORT`}</h4>
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

export default ActivityCreate;
