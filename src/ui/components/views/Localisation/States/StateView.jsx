import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "@domain/redux/localisation/states/states.actions";
import { AppTable } from "../../../organisms";
import { AppLoader } from "../../../molecules";
import StateUpdate from "./StateUpdate";
import StateCreate from "./StateCreate";
import { isEmpty } from "../../_validations/schema";
import constants from "./states.constants";

const StateView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;
  
  const { states_: data, loading } = useSelector((state) => state.states);

  const actionItems = {
    canview: false,
    canedit: true,
    candelete: true,
    candownload: false,
  };

  const columns = React.useMemo(
    () => tableData,
    [tableData],
  );

  if (!isEmpty(match.params) && match.path === `/system/localisation/${parameters}/:id`) {
    const { params } = match;
    const { id } = params;

    return <StateUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/system/localisation/${parameters}/create/${parameter}`
  ) {
    return <StateCreate props={rest} match={match} />;
  }

  return (
    <React.Fragment>
      <a
        onClick={() => rest.history.push(`/system/localisation/${parameters}/create/${parameter}`)}
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

StateView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

StateView.defaultProps = {
  match: {},
};

export default StateView;
