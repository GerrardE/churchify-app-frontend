import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import { updateSetting } from "@domain/redux/settings/settings.thunks";
import { Label, Inputfield, Button, ErrorMessage } from "../../atoms";
import {
  textFieldSchema,
} from "../_validations/schema";
import { AppLoader } from "../../molecules";

const SettingsUpdate = ({ id, props: { history } }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();
  const { metakey, metavalue, metatype } = errors;

  const { settings, loading } = useSelector((state) => state.settings);
  const setting = settings.filter((item) => item.id === id);
  const settingsItem = setting[0];

  const onSubmit = (data) => {
    dispatch(updateSetting(data, history));
  };

  return (
    <div className="container-fluid">
      <h4 className="c-grey-900 mT-10 mB-30">Settings</h4>
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="bgc-white bd bdrs-3 p-20 mB-20">
            <h4 className="c-grey-900 mB-20">Edit Item</h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="needs-validation"
              noValidate
            >
              <div className="form-row">
                <div className="form-group col-md-6">
                  <Label labelClassName="text-normal text-dark">ID</Label>
                  <Inputfield
                    inputType="text"
                    inputClassName="form-control"
                    defaultValue={settingsItem.id}
                    inputName="id"
                    inputRef={register}
                    readOnly
                  />
                </div>
                <div className="form-group col-md-6">
                  <Label labelClassName="text-normal text-dark">
                    Meta Type
                  </Label>
                  <Inputfield
                    inputType="text"
                    inputClassName={classnames("form-control", {
                      "is-invalid": metatype,
                    })}
                    defaultValue={settingsItem.metatype}
                    inputName="metatype"
                    inputRef={register(textFieldSchema)}
                  />
                  <ErrorMessage message={metatype?.message} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <Label labelClassName="text-normal text-dark">
                    Meta Key
                  </Label>
                  <Inputfield
                    inputType="text"
                    inputClassName={classnames("form-control", {
                      "is-invalid": metakey,
                    })}
                    defaultValue={settingsItem.metakey}
                    inputName="metakey"
                    inputRef={register(textFieldSchema)}
                  />
                  <ErrorMessage message={metakey?.message} />
                </div>
                <div className="form-group col-md-6">
                  <Label labelClassName="text-normal text-dark">
                    Meta Value
                  </Label>
                  <Inputfield
                    inputType="text"
                    inputClassName={classnames("form-control", {
                      "is-invalid": metavalue,
                    })}
                    defaultValue={settingsItem.metavalue}
                    inputName="metavalue"
                    inputRef={register({required: "field is required"})}
                  />
                  <ErrorMessage message={metavalue?.message} />
                </div>
              </div>

              {loading ? (
                <center>
                  <AppLoader loaderWidth="15%" loaderClassName="app-loader" />
                </center>
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
                      <a
                        className="btn btn-outline-danger"
                        onClick={history.push("/settings")}
                        role="button"
                        tabIndex={0}
                      >
                        Cancel
                      </a>
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

SettingsUpdate.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  props: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.oneOfType([PropTypes.func]).isRequired,
    }).isRequired,
  }).isRequired,
};

export default SettingsUpdate;
