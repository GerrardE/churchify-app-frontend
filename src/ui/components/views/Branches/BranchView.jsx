import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/branches/branches.actions";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import BranchUpdate from "./BranchUpdate";
import BranchCreate from "./BranchCreate";
import { isEmpty } from "../_validations/schema";
import constants from "./branches.constants";

const BranchView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { branches: data, loading } = useSelector((state) => state.branches);

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

  if (!isEmpty(match.params) && match.path === `/settings/${parameters}/:id`) {
    const { params } = match;
    const { id } = params;

    return <BranchUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/settings/${parameters}/create/${parameter}`
  ) {
    return <BranchCreate props={rest} match={match} />;
  }

  return (
    <React.Fragment>
      <a
        onClick={() => rest.history.push(`/settings/${parameters}/create/${parameter}`)}
        className="btn btn-outline-primary float-right"
        role="button"
        aria-pressed="true"
        tabIndex={0}
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

BranchView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

BranchView.defaultProps = {
  match: {},
};

export default BranchView;
