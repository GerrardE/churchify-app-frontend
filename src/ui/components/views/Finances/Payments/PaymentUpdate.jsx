import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getItem, getItems, updateItem } from "@infrastructure/services/thunkService";
import * as paymentActions from "@domain/redux/finances/payments/payments.actions";
import * as configsActions from "@domain/redux/configs/configs.actions";
import * as financeActions from "@domain/redux/finances/finances/finances.actions";
import constants from "./payments.constants";
import { Button } from "../../../atoms";
import { AppLoader } from "../../../molecules";
import getFieldsArray from "../../_helpers/fieldGenerator";

const PaymentUpdate = ({ id, props: { history } }) => {
  const { parameter, parameters, branchesparams, zonesparams, financesparams } = constants;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItem(configsActions, `configs/${parameters}/config`));
    dispatch(getItem(paymentActions, `/finance/${parameters}/${id}`));
    dispatch(getItems(financeActions, `${financesparams}`));
  }, [dispatch, parameters, id, branchesparams, zonesparams, financesparams]);

  const { register, handleSubmit, errors } = useForm();

  const { branches, payments, configs, zones, finances } = useSelector((state) => state);

  const { config: data } = configs;

  const { payment: defaults, loading } = payments;
  
  data.defaults = defaults;
  data.branchlist = branches.branches;
  data.zonelist = zones.zones;
  data.financelist = finances.finances;

  const fields = getFieldsArray(data, errors, register);

  const onSubmit = (data) => {
    const {
      nationalofficeremittance,
      hqbuilding,
      zonalhqremittance,
      salariesallowances,
      pastorpension,
      crusadeandmissionary,
      personalwelfare,
      transport,
      accomodation,
      donations,
      entertainment,
      medicalwelfare,
      stationery,
      churchexpenses,
      officeexpenses,
      rentpersonage,
      churchrent,
      telephoneandinternet,
      electricity,
      fuels,
      subscriptions,
      security,
      bankcharges,
      groupexpenses,
      loanadvanced,
      loanrepayed,
      furnituremaintenance,
      eqptmaintenance,
      motormaintenance,
      churchbldmaintenance,
      parsonagemaintenance,
      upload,
      financeid,
      notes,
    } = data;
    const formData = new FormData();

    formData.append("nationalofficeremittance", nationalofficeremittance);
    formData.append("hqbuilding", hqbuilding);
    formData.append("zonalhqremittance", zonalhqremittance);
    formData.append("salariesallowances", salariesallowances);
    formData.append("pastorpension", pastorpension);
    formData.append("crusadeandmissionary", crusadeandmissionary);
    formData.append("personalwelfare", personalwelfare);
    formData.append("transport", transport);
    formData.append("accomodation", accomodation);
    formData.append("donations", donations);
    formData.append("entertainment", entertainment);
    formData.append("medicalwelfare", medicalwelfare);
    formData.append("stationery", stationery);
    formData.append("churchexpenses", churchexpenses);
    formData.append("officeexpenses", officeexpenses);
    formData.append("rentpersonage", rentpersonage);
    formData.append("churchrent", churchrent);
    formData.append("telephoneandinternet", telephoneandinternet);
    formData.append("electricity", electricity);
    formData.append("fuels", fuels);
    formData.append("subscriptions", subscriptions);
    formData.append("security", security);
    formData.append("bankcharges", bankcharges);
    formData.append("groupexpenses", groupexpenses);
    formData.append("loanadvanced", loanadvanced);
    formData.append("loanrepayed", loanrepayed);
    formData.append("furnituremaintenance", furnituremaintenance);
    formData.append("eqptmaintenance", eqptmaintenance);
    formData.append("motormaintenance", motormaintenance);
    formData.append("churchbldmaintenance", churchbldmaintenance);
    formData.append("parsonagemaintenance", parsonagemaintenance);
    formData.append("upload", upload[0]);
    formData.append("financeid", financeid);
    formData.append("notes", notes);

    dispatch(updateItem(paymentActions, `/finance/${parameters}/${id}`, formData));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <h4 className="c-grey-900 mT-10 mB-30">{parameters.toUpperCase()}</h4>
        </div>
        <div className="col-md-6">
          <a
            onClick={() => history.push(`/finances/${parameters}`)}
            className="btn btn-outline-primary float-right"
            role="button"
            aria-pressed="true"
            tabIndex={0}
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

PaymentUpdate.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  props: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.oneOfType([PropTypes.func]).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PaymentUpdate;
