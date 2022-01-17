import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { getItem, getItems, createItem } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/users/users.actions";
import * as roleActions from "@domain/redux/roles/roles.actions";
import Logo from "@ui/assets/static/images/logo.png";
import { Button } from "@ui/components/atoms";
import { AppLoader } from "../../molecules";
import constants from "./users.constants";

const UserDetails = ({ id, props: { history } }) => {
  let [ roleData, setRole ] = React.useState("");

  const { parameters, rolesparams } = constants;

  const dispatch = useDispatch();

  if (!id) history.push(`/settings/${parameters}`);

  const { users, roles: data } = useSelector((state) => state);

  const { roles, loading: loadingRoles } = data;

  const { loading, user } = users;

  const keys = Object.keys(user);

  React.useEffect(() => {
    dispatch(getItem(actions, `/users/${id}`));
    dispatch(getItems(roleActions, `/${rolesparams}`));
  }, [dispatch, id, rolesparams]);

  const onSubmit = (role, id) => {
    const data = { role, id };
    dispatch(createItem(roleActions, `${parameters}/${rolesparams}`, data));
  };

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
                                <th>KEY</th>
                                <th>DESCRIPTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              {keys.map((key) => (
                                <tr key={uuidv4()}>
                                  <td>
                                    <h6 className="mb-0">
                                      {key.toUpperCase()}
                                    </h6>
                                  </td>
                                  {key == "createdAt" || key == "updatedAt" ? (
                                    <td>
                                      {moment(user[key]).format("DD/MM/YYYY")}
                                    </td>
                                  ) : (
                                    <td>{user[key].toUpperCase()}</td>
                                  )}
                                </tr>
                              ))}
                              <tr>
                                <td>
                                  <h6 className="mb-0">MANAGE ROLE</h6>
                                </td>
                                <td>
                                  <div className="row">
                                    <div className="form-group col-md-6">
                                      <select
                                        className="form-control custom-select mr-sm-2"
                                        onChange={(e) =>
                                          setRole(e.target.value)
                                        }
                                        name="role"
                                      >
                                        <option value="">Choose role...</option>
                                        {roles &&
                                          roles.map((val) => (
                                            <option value={val.id} key={val.id}>
                                              {val.name}
                                            </option>
                                          ))}
                                      </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                      {loadingRoles ? (
                                        <p>loading...</p>
                                      ) : (
                                        <Button
                                          buttonType="submit"
                                          buttonClassName="btn btn-primary"
                                          buttonOnClick={() =>
                                            onSubmit(roleData, user["id"])
                                          }
                                        >
                                          Save
                                        </Button>
                                      )}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="card-footer">
                          <span className="text-muted float-right">
                            <a
                              className="btn btn-outline-danger"
                              onClick={() => history.push(`/settings/${parameters}`)}
                              role="button"
                              tabIndex={0}
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
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  props: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.oneOfType([PropTypes.func]).isRequired,
    }).isRequired,
  }).isRequired,
};

UserDetails.defaultProps = {
  id: 1,
};

export default UserDetails;
