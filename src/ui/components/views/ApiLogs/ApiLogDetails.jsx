import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import {
  getItem,
} from "@infrastructure/services/thunkService";
import * as apilogActions from "@domain/redux/apilogs/apilogs.actions";
import Logo from "@ui/assets/static/images/logo.png";
import { AppLoader } from "../../molecules";
import constants from "./apilogs.constants";

const ApiLogDetail = ({ id, ...rest }) => {
  const { parameters } = constants;

  const { props } = rest;

  const dispatch = useDispatch();

  const { history } = props;

  if (!id) history.push(`/system/${parameters}`);

  const { apilogs } = useSelector((state) => state);

  const { loading, apilog } = apilogs;

  const keys = Object.keys(apilog);

  React.useEffect(() => {
    dispatch(getItem(apilogActions, `/${parameters}/${id}`));
  }, [dispatch, id, parameters]);

  return (
    <div className="containerx">
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="bg-white bd bdrs-3 p-20 mB-20">
            <div className="justify-content-center mt-50 mb-50">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    {loading ? (
                      <AppLoader />
                    ) : (
                      <React.Fragment>
                        <div className="card-header card-custom-header bg-transparent header-elements-inline">
                          <div className="row">
                            <img src={Logo} alt="TREM Logo" className="mr-2" />
                            <h6 className="card-title card-custom-title">
                              TREM Admin
                            </h6>
                          </div>
                        </div>
                        <div className="card-body card-custom-body">
                          <div className="row">
                            <div className="col-sm-6" />
                            <div className="col-sm-6">
                              <div className="mb-4 ">
                                <div className="text-sm-right float-right">
                                  <h4 className="invoice-color mb-2 mt-md-2">
                                    {`ID - ${apilog.id && apilog.id}`}
                                  </h4>
                                  <ul className="list list-unstyled mb-0">
                                    <li>
                                      Added:
                                      <span className="font-weight-semibold">
                                        {moment(apilog.createdAt).format(
                                          " DD/MM/YYYY",
                                        )}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="mb-4 " />
                            </div>
                            <div className="col-sm-6" />
                          </div>
                        </div>

                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>KEY</th>
                                <th>DESCRIPTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              {keys.map((k) => (
                                <tr key={uuidv4()}>
                                  <td>
                                    <h6 className="mb-0">
                                      {k && k.toUpperCase()}
                                    </h6>
                                  </td>
                                  {k == "createdAt" || k == "updatedAt" ? (
                                    <td>
                                      {moment(apilog[k]).format("DD/MM/YYYY")}
                                    </td>
                                  ) : (
                                    <td>{apilog[k]}</td>
                                  )}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <span className="text-muted float-right mr-2 mb-2">
                            <a
                              className="btn btn-outline-danger"
                              href={`/system/${parameters}`}
                              role="button"
                            >
                              Back
                            </a>
                          </span>
                        </div>
                      </React.Fragment>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2" />
      </div>
    </div>
  );
};

ApiLogDetail.propTypes = {
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  props: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

ApiLogDetail.defaultProps = {
  history: {},
  props: {},
  id: 1,
};

export default ApiLogDetail;
