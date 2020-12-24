import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from "prop-types";
import {
  getItem,
  getItems,
  createItem,
} from "@infrastructure/services/thunkService";
import * as usersActions from "@domain/redux/users/users.actions";
import * as configsActions from "@domain/redux/configs/configs.actions";
import * as branchActions from "@domain/redux/branches/branches.actions";
import * as zonesActions from "@domain/redux/zones/zones.actions";
import * as statesActions from "@domain/redux/states/states.actions";
import * as countriesActions from "@domain/redux/countries/countries.actions";
import { Button } from "../../atoms";
import AppLoader from "../../molecules/AppLoader";
import constants from "./auth.constants";
import getFieldsArray from "../_helpers/fieldGenerator";

const SignupView = () => {
  const {
    branchesparams,
    zonesparams,
    parameters,
    statesparams,
    countryparam,
    countryparams,
  } = constants;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItems(countriesActions, `${countryparams}`));

    dispatch(getItems(branchActions, `${branchesparams}`));

    dispatch(getItems(zonesActions, `${zonesparams}`));

    dispatch(getItem(configsActions, `configs/${parameters}/config`));
  }, [dispatch, parameters, branchesparams, zonesparams, countryparams]);

  const { users, configs, branches, countries, states, zones } = useSelector(
    (state) => state,
  );

  const { loading } = users;

  const { config: data } = configs;

  data.zonesdata = zones.zones;

  data.countries = countries.countries;

  const { register, handleSubmit, errors } = useForm();

  const getStates = (id) => {
    dispatch(getItems(statesActions, `${statesparams}/${id}/${countryparam}`));
  };

  const fields = getFieldsArray(
    data,
    errors,
    register,
    states.states_,
    getStates,
    [{}],
    () => {},
    branches.branches,
  );

  const onSubmit = (data) => {
    dispatch(
      createItem(usersActions, "auth/signup", data),
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

// SignupView.propTypes = {
//   history: PropTypes.oneOfType([PropTypes.object]),
// };

// SignupView.defaultProps = {
//   history: {},
// };

export default SignupView;
