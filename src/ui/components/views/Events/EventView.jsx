import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/events/events.actions";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import EventUpdate from "./EventUpdate";
import EventCreate from "./EventCreate";
import { isEmpty } from "../_validations/schema";
import constants from "./events.constants";

const EventView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { events: data, loading } = useSelector((state) => state.events);

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

    return <EventUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/settings/${parameters}/create/${parameter}`
  ) {
    return <EventCreate props={rest} match={match} />;
  }

  return (
    <React.Fragment>
      <a
        href={`/settings/${parameters}/create/${parameter}`}
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

EventView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

EventView.defaultProps = {
  match: {},
};

export default EventView;
