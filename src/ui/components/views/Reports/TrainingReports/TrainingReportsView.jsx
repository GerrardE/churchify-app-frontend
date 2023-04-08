import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as trainingreportsActions from "@domain/redux/reports/trainingreports/trainingreports.actions";
import { AppTable } from "../../../organisms";
import { AppLoader } from "../../../molecules";
import constants from "./trainingreports.constants";

const TrainingReportsView = ({ props: { history } }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { trainingreports: data, loading } = useSelector((state) => state.trainingreports);

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
    dispatch(getItems(trainingreportsActions, parameters));
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
          actions={trainingreportsActions}
          constants={constants}
        />
      )}
    </React.Fragment>
  );
};

TrainingReportsView.propTypes = {
  props: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.oneOfType([PropTypes.func]).isRequired,
    }).isRequired,
  }).isRequired,
};

export default TrainingReportsView;
