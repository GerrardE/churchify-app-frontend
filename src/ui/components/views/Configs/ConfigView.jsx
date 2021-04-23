import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/configs/configs.actions";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import ConfigUpdate from "./ConfigUpdate";
import ConfigCreate from "./ConfigCreate";
import ConfigDetails from "./ConfigDetails";
import { isEmpty } from "../_validations/schema";
import constants from "./configs.constants";

const ConfigView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { configs: data, loading } = useSelector((state) => state.configs);

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

  if (!isEmpty(match.params) && match.path === `/system/${parameters}/:id`) {
    const { params } = match;
    const { id } = params;

    return <ConfigUpdate id={id} props={rest} />;
  }

  if (!isEmpty(match.params) && match.path === `/system/${parameters}/:id/details`) {
    const { params } = match;
    const { id } = params;

    return <ConfigDetails id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/system/${parameters}/create/${parameter}`
  ) {
    return <ConfigCreate props={rest} match={match} />;
  }

  return (
    <React.Fragment>
      <a
        href={`/system/${parameters}/create/${parameter}`}
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

ConfigView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

ConfigView.defaultProps = {
  match: {},
};

export default ConfigView;
