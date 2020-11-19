import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import { addSetting, getSetting } from "@domain/redux/settings/settings.thunks";
import { Label, Inputfield, Button, ErrorMessage } from "../../atoms";
import { AppLoader } from "../../molecules";

const SettingCreate = ({ match, ...rest }) => {
  const { props } = rest;
  const { history } = props;
  const parameter = match.params.setting;
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.signin.user);

  React.useEffect(() => {
    dispatch(getSetting(parameter, token));
  }, [dispatch, token, parameter]);
  
  const { loading, setting } = useSelector((state) => state.settings);
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = (data) => {
    data.token = token;
    data.parameter = parameter;
    dispatch(addSetting(data, history));
  };

  
  const fieldsArray = [];
  if(setting.config != undefined) {
    setting.config.map((conf) => {
    
      fieldsArray.push(
        <div className="form-group col-md-6" key={conf.field}>
          <Label labelClassName="text-normal text-dark">
            {conf.field.toUpperCase()}
          </Label>
          <Inputfield
            key={conf.field}
            fieldType={(conf.field == "notes") ? "textarea" : ""}
            inputType="text"
            inputClassName={classnames("form-control", {
              "is-invalid": errors[conf.field],
            })}
            inputDisabled={(conf.field.includes("id")) ? true : ""}
            inputName={conf.field}
            inputRef={register(conf.validation)}
          />
          <ErrorMessage message={errors[conf.field]?.message} />
        </div>,
      );
    });
  }

  return (
    <div className="container-fluid">
      <h4 className="c-grey-900 mT-10 mB-30">Settings</h4>
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
                {fieldsArray}
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
                      <a
                        className="btn btn-outline-danger"
                        href="/dashboard/settings"
                        role="button"
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

SettingCreate.propTypes = {
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  props: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  match: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

SettingCreate.defaultProps = {
  history: {},
  props: {},
  match: {},
};

export default SettingCreate;
