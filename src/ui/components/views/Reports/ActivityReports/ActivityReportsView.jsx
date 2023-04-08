import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as activityreportsActions from "@domain/redux/reports/activityreports/activityreports.actions";
import { AppTable } from "../../../organisms";
import { AppLoader } from "../../../molecules";
import constants from "./activityreports.constants";

const ActivityReportsView = ({ props: { history } }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { activityreports: data, loading } = useSelector((state) => state.activityreports);

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
    dispatch(getItems(activityreportsActions, parameters));
  }, [dispatch, parameters]);

  return (
    <React.Fragment>
      <a
        onClick={() => history.push(`/reports/${parameters}/create/${parameter}`)}
        className="btn btn-outline-primary float-right"
        role="button"
        aria-pressed="true"
        tabIndex={0}
      >
        {`SUBMIT ${parameter.toUpperCase()}`}
      </a>
      {loading ? (
        <AppLoader loaderWidth="15%" loaderClassName="app-loader mt-15" />
      ) : (
        <AppTable
          data={data}
          columns={columns}
          actionItems={actionItems}
          actions={activityreportsActions}
          constants={constants}
        />
      )}
    </React.Fragment>
  );
};

ActivityReportsView.propTypes = {
  props: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.oneOfType([PropTypes.func]).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ActivityReportsView;
