import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import {
  getItem,
  getItems,
  createItem,
} from "@infrastructure/services/thunkService";
import * as roleActions from "@domain/redux/roles/roles.actions";
import * as permissionActions from "@domain/redux/permissions/permissions.actions";
import Logo from "@ui/assets/static/images/logo.png";
import { Button } from "@ui/components/atoms";
import { AppLoader } from "../../molecules";
import constants from "./roles.constants";
import Label from "../../atoms/Label";

const RoleDetail = ({ id, ...rest }) => {
  let selectedPermissions = [];

  let deselectedPermissions = [];

  const { parameters, permissionparams } = constants;

  const { props } = rest;

  const dispatch = useDispatch();

  const { history } = props;

  if (!id) history.push(`/settings/${parameters}`);

  const { roles: data, permissions: permData } = useSelector((state) => state);

  const { loading, role } = data;

  const { loading: loadingPermissions, permissions } = permData;

  const keys = Object.keys(role);

  keys.pop("permissions");

  React.useEffect(() => {
    dispatch(getItem(roleActions, `/${parameters}/${id}`));
    dispatch(getItems(permissionActions, `/${permissionparams}`));
  }, [dispatch, id, permissionparams, parameters]);

  const onSubmit = (toAssign, toUnassign) => {
    const data = {};

    data.assign = { permission: toAssign };

    data.unassign = { permission: toUnassign };

    if (selectedPermissions.length > 0) {
      dispatch(
        createItem(
          permissionActions,
          `${parameters}/${permissionparams}/${id}`,
          data.assign,
        ),
      );
    }

    if (deselectedPermissions.length > 0) {
      dispatch(
        createItem(
          permissionActions,
          `${parameters}/${permissionparams}/${id}/delete`,
          data.unassign,
        ),
      );
    }
  };

  const updatePerms = (e) => {
    if (!e.target.checked) {
      const isDeselected = deselectedPermissions.find(
        (item) => item === e.target.value,
      );
      if (!isDeselected) {
        deselectedPermissions.push(e.target.value);
        selectedPermissions = selectedPermissions.filter(
          (item) => item !== e.target.value,
        );
      } else {
        deselectedPermissions = deselectedPermissions.filter(
          (item) => item !== e.target.value,
        );
      }
    } else {
      const isSelected = selectedPermissions.find(
        (item) => item === e.target.value,
      );
      if (!isSelected) {
        selectedPermissions.push(e.target.value);
        deselectedPermissions = deselectedPermissions.filter(
          (item) => item !== e.target.value,
        );
      } else {
        selectedPermissions = selectedPermissions.filter(
          (item) => item !== e.target.value,
        );
      }
    }
  };

  const handleCheckboxes = (perms, existingPerms) => {
    for (const e of existingPerms) {
      let p = perms.find((p) => p.id === e.id);
      perms.splice(perms.indexOf(p), 1);
    }

    const permElements = [];

    const permElementGenerator = (results, defaultState) => {
      results &&
        results.map((item) =>
          permElements.push(
            <div
              className="form-group col-md-6 col-sm-6 col-lg-6"
              key={`${item.id}-check`}
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item.id}
                  defaultChecked={defaultState}
                  onChange={(e) => updatePerms(e)}
                />
                <Label labelClassName="text-normal text-dark form-check-label">
                  {item.name?.toUpperCase()}
                </Label>
              </div>
            </div>,
          ),
        );
    };

    permElementGenerator(existingPerms, true);
    permElementGenerator(perms, false);

    return permElements;
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
                                    {`${role.name && role.name.toUpperCase()}`}
                                  </h4>
                                  <ul className="list list-unstyled mb-0">
                                    <li>
                                      Added:
                                      <span className="font-weight-semibold">
                                        {moment(role.createdAt).format(
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
                              {keys.map((k) => (
                                <tr key={uuidv4()}>
                                  <td>
                                    <h6 className="mb-0">
                                      {k && k.toUpperCase()}
                                    </h6>
                                  </td>
                                  {k == "createdAt" || k == "updatedAt" ? (
                                    <td>
                                      {moment(role[k]).format("DD/MM/YYYY")}
                                    </td>
                                  ) : (
                                    <td>{role[k]}</td>
                                  )}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="mx-auto">
                          <h6 className="mb-0">
                            {permissionparams.toUpperCase()}
                          </h6>
                        </div>
                        <br />
                        <div className="form-row mx-2">
                          {permissions === undefined ||
                          role.permissions === undefined
                            ? ""
                            : handleCheckboxes(permissions, role.permissions)}
                        </div>

                        <div className="card-footer">
                          {loadingPermissions ? (
                            <p>loading...</p>
                          ) : (
                            <Button
                              buttonType="submit"
                              buttonClassName="btn btn-outline-primary mr-2"
                              buttonOnClick={() =>
                                onSubmit(selectedPermissions, deselectedPermissions)
                              }
                            >
                              Save Permissions
                            </Button>
                          )}
                          <span className="text-muted float-right">
                            <a
                              className="btn btn-outline-danger"
                              href={`/settings/${parameters}`}
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

RoleDetail.propTypes = {
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  props: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

RoleDetail.defaultProps = {
  history: {},
  props: {},
  id: 1,
};

export default RoleDetail;
