import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/finances/payments/payments.actions";
import { AppTable } from "../../../organisms";
import { AppLoader } from "../../../molecules";
import PaymentUpdate from "./PaymentUpdate";
import PaymentCreate from "./PaymentCreate";
import { isEmpty } from "../../_validations/schema";
import constants from "./payments.constants";

const PaymentView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { payments: data, loading } = useSelector((state) => state.payments);

  const actionItems = {
    canview: false,
    canedit: true,
    candelete: true,
    candownload: true,
  };

  const columns = React.useMemo(
    () => tableData,
    [tableData],
  );

  React.useEffect(() => {
    dispatch(getItems(actions, `/finance/${parameters}`));
  }, [dispatch, parameters]);

  if (!isEmpty(match.params) && match.path === `/finances/${parameters}/:id`) {
    const { params } = match;
    const { id } = params;

    return <PaymentUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/finances/${parameters}/create/${parameter}`
  ) {
    return <PaymentCreate props={rest} match={match} />;
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

PaymentView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

PaymentView.defaultProps = {
  match: {},
};

export default PaymentView;
