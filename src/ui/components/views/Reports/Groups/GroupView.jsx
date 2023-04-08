import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as groupsActions from "@domain/redux/reports/groups/groups.actions";
import { AppTable } from "../../../organisms";
import { AppLoader } from "../../../molecules";
import constants from "./group.constants";

const GroupView = ({ props: { history } }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { groups: data, loading } = useSelector((state) => state.groups);

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
    dispatch(getItems(groupsActions, parameters));
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
          actions={groupsActions}
          constants={constants}
        />
      )}
    </React.Fragment>
  );
};

GroupView.propTypes = {
  props: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.oneOfType([PropTypes.func]).isRequired,
    }).isRequired,
  }).isRequired,
};

export default GroupView;
