import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/trainings/trainings.actions";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import TrainingUpdate from "./TrainingUpdate";
import TrainingCreate from "./TrainingCreate";
import { isEmpty } from "../_validations/schema";
import constants from "./training.constants";

const TrainingView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { trainings: data, loading } = useSelector((state) => state.trainings);

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

    return <TrainingUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/settings/${parameters}/create/${parameter}`
  ) {
    return <TrainingCreate props={rest} match={match} />;
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

TrainingView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
  history: PropTypes.shape({
    push: PropTypes.oneOfType([PropTypes.func]).isRequired,
  }).isRequired,
};

TrainingView.defaultProps = {
  match: {},
};

export default TrainingView;
