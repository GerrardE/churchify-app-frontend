import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/finances/remunerations/remunerations.actions";
import { AppTable } from "../../../organisms";
import { AppLoader } from "../../../molecules";
import RemunerationUpdate from "./RemunerationUpdate";
import RemunerationCreate from "./RemunerationCreate";
import { isEmpty } from "../../_validations/schema";
import constants from "./remunerations.constants";

const RemunerationView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { remunerations: data, loading } = useSelector((state) => state.remunerations);

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

    return <RemunerationUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/finances/${parameters}/create/${parameter}`
  ) {
    return <RemunerationCreate props={rest} match={match} />;
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

RemunerationView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

RemunerationView.defaultProps = {
  match: {},
};

export default RemunerationView;
