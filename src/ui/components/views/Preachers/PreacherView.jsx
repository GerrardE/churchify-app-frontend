import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/preachers/preachers.actions";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import PreacherUpdate from "./PreacherUpdate";
import PreacherCreate from "./PreacherCreate";
import { isEmpty } from "../_validations/schema";
import constants from "./preachers.constants";

const PreacherView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { preachers: data, loading } = useSelector((state) => state.preachers);

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

  if (!isEmpty(match.params) && match.path === `/dashboard/settings/${parameters}/:id`) {
    const { params } = match;
    const { id } = params;

    return <PreacherUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/dashboard/settings/${parameters}/create/${parameter}`
  ) {
    return <PreacherCreate props={rest} match={match} />;
  }

  return (
    <React.Fragment>
      <a
        href={`/dashboard/settings/${parameters}/create/${parameter}`}
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

PreacherView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

PreacherView.defaultProps = {
  match: {},
};

export default PreacherView;
