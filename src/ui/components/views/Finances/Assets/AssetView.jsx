import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/finances/assets/assets.actions";
import { AppTable } from "../../../organisms";
import { AppLoader } from "../../../molecules";
import AssetUpdate from "./AssetUpdate";
import AssetCreate from "./AssetCreate";
import { isEmpty } from "../../_validations/schema";
import constants from "./assets.constants";

const AssetView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { assets: data, loading } = useSelector((state) => state.assets);

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

    return <AssetUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/finances/${parameters}/create/${parameter}`
  ) {
    return <AssetCreate props={rest} match={match} />;
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

AssetView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

AssetView.defaultProps = {
  match: {},
};

export default AssetView;
