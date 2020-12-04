import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/permissions/permissions.actions";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import PermissionUpdate from "./PermissionUpdate";
import PermissionCreate from "./PermissionCreate";
import { isEmpty } from "../_validations/schema";
import constants from "./permissions.constants";

const PermissionView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { permissions: data, loading } = useSelector((state) => state.permissions);

  const actionItems = {
    canview: false,
    canedit: true,
    candelete: true,
  };

  const columns = React.useMemo(
    () => tableData,
    [tableData],
  );

  React.useEffect(() => {
    dispatch(getItems(actions, parameters));
  }, [dispatch, parameters]);

  if (!isEmpty(match.params) && match.path === `/${parameters}/:id`) {
    const { params } = match;
    const { id } = params;

    return <PermissionUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/${parameters}/create/${parameter}`
  ) {
    return <PermissionCreate props={rest} match={match} />;
  }

  return (
    <React.Fragment>
      <a
        href={`/${parameters}/create/${parameter}`}
        className="btn btn-outline-primary float-right"
        role="button"
        aria-pressed="true"
      >
        {`CREATE ${parameter.toUpperCase()}`}
      </a>
      {loading ? (
        <AppLoader loaderWidth="15%" loaderClassName="app-loader mt-15" />
      ) : (
        <AppTable
          data={data}
          columns={columns}
          actionItems={actionItems}
          actions={actions}
          constants={constants}
        />
      )}
    </React.Fragment>
  );
};

PermissionView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

PermissionView.defaultProps = {
  match: {},
};

export default PermissionView;
