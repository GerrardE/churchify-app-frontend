import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/finances/finances/finances.actions";
import { AppTable } from "../../../organisms";
import { AppLoader } from "../../../molecules";
import FinanceUpdate from "./FinanceUpdate";
import FinanceCreate from "./FinanceCreate";
import { isEmpty } from "../../_validations/schema";
import constants from "./finances.constants";

const FinanceView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { finances: data, loading } = useSelector((state) => state.finances);

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

  if (!isEmpty(match.params) && match.path === `/finances/${parameters}/:id`) {
    const { params } = match;
    const { id } = params;

    return <FinanceUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/finances/${parameters}/create/${parameter}`
  ) {
    return <FinanceCreate props={rest} match={match} />;
  }

  return (
    <React.Fragment>
      <a
        onClick={() => rest.history.push(`/finances/${parameters}/create/${parameter}`)}
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

FinanceView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

FinanceView.defaultProps = {
  match: {},
};

export default FinanceView;
