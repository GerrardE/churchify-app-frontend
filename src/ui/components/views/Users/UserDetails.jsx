import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getItem } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/users/users.actions";
import Logo from "@ui/assets/static/images/logo.png";
import { AppLoader } from "../../molecules";
import constants from "./users.constants";

const UserDetails = ({ id, ...rest }) => {
  const { parameters } = constants;

  const { props } = rest;

  const dispatch = useDispatch();

  const { history } = props;

  if (!id) history.push(`/${parameters}`);

  const { user, loading } = useSelector((state) => state.users);

  React.useEffect(() => {
    dispatch(getItem(actions, `/users/${id}`));
  }, [dispatch, id]);

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
                            <img src={Logo} alt="Trem Logo" className="mr-2" />
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
                                    {`${user.firstname} ${user.lastname}`}
                                  </h4>
                                  <ul className="list list-unstyled mb-0">
                                    <li>
                                      Joined:
                                      <span className="font-weight-semibold">
                                        {moment(user.createdAt).format(
                                          "DD/MM/YYYY",
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
                                <th>Key</th>
                                <th>Data</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><h6 className="mb-0">ID</h6></td>
                                <td>{user.id}</td>
                              </tr>
                              <tr>
                                <td><h6 className="mb-0">First Name</h6></td>
                                <td>{user.firstname}</td>
                              </tr>
                              <tr>
                                <td><h6 className="mb-0">Last Name</h6></td>
                                <td>{user.lastname}</td>
                              </tr>
                              <tr>
                                <td><h6 className="mb-0">Email</h6></td>
                                <td>{user.email}</td>
                              </tr>
                              <tr>
                                <td><h6 className="mb-0">Phone</h6></td>
                                <td>{user.phone}</td>
                              </tr>
                              <tr>
                                <td><h6 className="mb-0">Role</h6></td>
                                <td>
                                  {/* {
                                    roles.lenght  ? roles[0].name : ""
                                  } */}
                                </td>
                              </tr>
                              <tr>
                                <td><h6 className="mb-0">Assign Role</h6></td>
                                <td>xoxo</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="card-footer">
                          <span className="text-muted float-right">
                            <a
                              className="btn btn-outline-danger"
                              href={`/${parameters}`}
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

UserDetails.propTypes = {
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  props: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

UserDetails.defaultProps = {
  history: {},
  props: {},
  id: 1,
};

export default UserDetails;
