import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getItem, getItems, updateItem } from "@infrastructure/services/thunkService";
import * as receiptActions from "@domain/redux/finances/receipts/receipts.actions";
import * as configsActions from "@domain/redux/configs/configs.actions";
import * as financeActions from "@domain/redux/finances/finances/finances.actions";
import constants from "./receipts.constants";
import { Button } from "../../../atoms";
import { AppLoader } from "../../../molecules";
import getFieldsArray from "../../_helpers/fieldGenerator";

const ReceiptUpdate = ({ id, props: { history } }) => {
  const { parameter, parameters, branchesparams, zonesparams, financesparams } = constants;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItem(configsActions, `configs/${parameters}/config`));
    dispatch(getItem(receiptActions, `/finance/${parameters}/${id}`));
    dispatch(getItems(financeActions, `${financesparams}`));
  }, [dispatch, parameters, id, branchesparams, zonesparams, financesparams]);

  const { register, handleSubmit, errors } = useForm();

  const { branches, receipts, configs, zones, finances } = useSelector((state) => state);

  const { config: data } = configs;

  const { receipt: defaults, loading } = receipts;
  
  data.defaults = defaults;
  data.branchlist = branches.branches;
  data.zonelist = zones.zones;
  data.financelist = finances.finances;

  const fields = getFieldsArray(data, errors, register);

  const onSubmit = (data) => {
    const {
      financeid,
      month,
      offerings,
      tithes,
      seedfaith,
      thanksgiving,
      annualthanksgiving,
      buildingprojects,
      otherprojects,
      crusadeandmissionary,
      ministrydeposits,
      assetdisposal,
      interestincome,
      loanrepayedbydebtors,
      loanreceived,
      donationreceived,
      upload,
      notes,
    } = data;
    const formData = new FormData();

    formData.append("financeid", financeid);
    formData.append("month", month);
    formData.append("offerings", offerings);
    formData.append("tithes", tithes);
    formData.append("seedfaith", seedfaith);
    formData.append("thanksgiving", thanksgiving);
    formData.append("annualthanksgiving", annualthanksgiving);
    formData.append("buildingprojects", buildingprojects);
    formData.append("otherprojects", otherprojects);
    formData.append("crusadeandmissionary", crusadeandmissionary);
    formData.append("ministrydeposits", ministrydeposits);
    formData.append("assetdisposal", assetdisposal);
    formData.append("interestincome", interestincome);
    formData.append("loanrepayedbydebtors", loanrepayedbydebtors);
    formData.append("loanreceived", loanreceived);
    formData.append("donationreceived", donationreceived);
    formData.append("upload", upload[0]);
    formData.append("notes", notes);

    dispatch(updateItem(receiptActions, `/finance/${parameters}/${id}`, formData));
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

ReceiptUpdate.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  props: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.oneOfType([PropTypes.func]).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ReceiptUpdate;
