import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getItem,
  getItems,
  createItem,
} from "@infrastructure/services/thunkService";
import * as usersActions from "@domain/redux/users/users.actions";
import * as configsActions from "@domain/redux/configs/configs.actions";
import * as zonesActions from "@domain/redux/zones/zones.actions";
import * as countriesActions from "@domain/redux/countries/countries.actions";
import { Button } from "../../atoms";
import AppLoader from "../../molecules/AppLoader";
import constants from "./auth.constants";
import getFieldsArray from "../_helpers/fieldGenerator";

const SignupView = ({ match }) => {
  const {
    branchesparams,
    zonesparams,
    parameters,
    countryparams,
  } = constants;

  const dispatch = useDispatch();

  React.useEffect(() => {
    if(match.path == "/signup"){
      dispatch(getItems(countriesActions, `${countryparams}`));
  
      dispatch(getItems(zonesActions, `${zonesparams}`));
  
      dispatch(getItem(configsActions, `configs/${parameters}/config`));
    }
  }, [dispatch, parameters, branchesparams, zonesparams, countryparams, match.path]);

  const { users, configs, branches, countries, states, cities, zones } = useSelector(
    (state) => state,
  );

  const { loading } = users;

  const { config: data } = configs;

  data.zonelist = zones.zones;
  data.branchlist = branches.branches;
  data.countries = countries.countries;

  const { register, handleSubmit, errors } = useForm();

  const fields = getFieldsArray(
    data,
    errors,
    register,
    states.states_,
    cities.cities,
  );

  const onSubmit = (data) => {
    dispatch(
      createItem(usersActions, "users/auth/signup", data),
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="needs-validation mt-10"
      noValidate
    >
      <div className="form-row">
        {fields}
      </div>

      {loading ? (
        <center>
          <AppLoader />
        </center>
      ) : (
        <div className="form-group">
          <div className="peers ai-c jc-sb fxw-nw">
            <div className="peer" />
            <div className="peer">
              <Button buttonType="submit" buttonClassName="btn btn-primary">
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

SignupView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

SignupView.defaultProps = {
  match: {},
};

export default SignupView;
