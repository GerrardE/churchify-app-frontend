import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/downloads/downloads.actions";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import DownloadUpdate from "./DownloadUpdate";
import DownloadCenter from "./DownloadCenter";
import DownloadCreate from "./DownloadCreate";
import { isEmpty } from "../_validations/schema";
import constants from "./downloads.constants";

const DownloadView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { downloads: data, loading } = useSelector((state) => state.downloads);

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

  if (isEmpty(match.params) && match.path === "/downloads") {
    return <DownloadCenter />;
  }

  if (!isEmpty(match.params) && match.path === `/settings/${parameters}/:id`) {
    const { params } = match;
    const { id } = params;

    return <DownloadUpdate id={id} props={rest} />;
  }

  if (!isEmpty(match.params) && match.path === `/settings/${parameters}/:id`) {
    const { params } = match;
    const { id } = params;

    return <DownloadUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/settings/${parameters}/create/${parameter}`
  ) {
    return <DownloadCreate props={rest} match={match} />;
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

DownloadView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

DownloadView.defaultProps = {
  match: {},
};

export default DownloadView;
