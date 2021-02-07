import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/users/users.actions";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import UserUpdate from "./UserUpdate";
import UserDetails from "./UserDetails";
import UserCreate from "./UserCreate";
import { isEmpty } from "../_validations/schema";
import constants from "./users.constants";

const UserView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { users: data, loading } = useSelector((state) => state.users);

  const actionItems = {
    canview: true,
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

  if (!isEmpty(match.params) && match.path === `/settings/${parameters}/:id`) {
    const { params } = match;
    const { id } = params;

    return <UserUpdate id={id} props={rest} />;
  }

  if (!isEmpty(match.params) && match.path === `/settings/${parameters}/:id/details`) {
    const { params } = match;
    const { id } = params;

    return <UserDetails id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/settings/${parameters}/create/${parameter}`
  ) {
    return <UserCreate props={rest} match={match} />;
  }

  return (
    <React.Fragment>
      <a
        href={`/settings/${parameters}/create/${parameter}`}
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

UserView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

UserView.defaultProps = {
  match: {},
};

export default UserView;
